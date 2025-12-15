.PHONY: all render models fabrication web clean

BOARD = linht-hw

FABHOUSES = jlcpcb pcbway

# Markdown processing
MARKDOWN_SRC := $(wildcard *.md)
MARKDOWN_HTML := $(patsubst %.md, build/%.html, $(MARKDOWN_SRC))

# Copy templates
TEMPLATE_SRC_DIR := present/template
TEMPLATE_BUILD_DIR := build
TEMPLATE_OUTPUT_DIR := build/web
TEMPLATE_RENDER_DIR := $(TEMPLATE_OUTPUT_DIR)/imgs
TEMPLATE_FAB_DIR := $(TEMPLATE_OUTPUT_DIR)/files

TEMPLATE_J2 := $(wildcard $(TEMPLATE_SRC_DIR)/*.html.j2)
TEMPLATE_JSON := $(wildcard $(TEMPLATE_SRC_DIR)/*.json)
COPIED_J2 := $(patsubst $(TEMPLATE_SRC_DIR)/%, $(TEMPLATE_BUILD_DIR)/%, $(TEMPLATE_J2))
COPIED_JSON := $(patsubst $(TEMPLATE_SRC_DIR)/%, $(TEMPLATE_BUILD_DIR)/%, $(TEMPLATE_JSON))
RENDERED_HTML := $(patsubst build/%.html.j2, build/web/%.html, $(COPIED_J2))

RENDER_ARGS := --preset follow_pcb_editor --background transparent --quality high -w 1440 -h 1080

STATIC_DIRS := $(shell find present/template -mindepth 1 -maxdepth 1 -type d)

GERBER_ZIPS = $(foreach fab,$(FABHOUSES),$(TEMPLATE_FAB_DIR)/gerbers_$(fab).zip)

all: render models fabrication web

web: $(MARKDOWN_HTML) $(COPIED_J2) $(COPIED_JSON) $(RENDERED_HTML)

fabrication: $(TEMPLATE_BUILD_DIR)/panel/$(BOARD)_panel.kicad_pcb $(BOARD).kicad_sch $(GERBER_ZIPS)
	@mkdir -p $(TEMPLATE_FAB_DIR)
	kicad-cli sch export pdf $(word 2,$^) -o $(TEMPLATE_FAB_DIR)/$(BOARD)_schematic.pdf
	kicad-cli sch export pdf -b -n -o $(TEMPLATE_FAB_DIR)/$(BOARD)_schematic_bw.pdf $(word 2,$^)
	kicad-cli sch export python-bom $(word 2,$^) -o $(TEMPLATE_FAB_DIR)/$(BOARD)_bom.xml
	xsltproc -o $(TEMPLATE_FAB_DIR)/$(BOARD)_bom.csv present/bom2grouped_csv_jlcpcb.xsl $(TEMPLATE_FAB_DIR)/$(BOARD)_bom.xml
	#
	kicad-cli pcb export pos $< --side both --format csv --units mm -o $(TEMPLATE_FAB_DIR)/$(BOARD)_pos.csv
	kicad-cli pcb export pos $< --side both --format ascii --units mm -o $(TEMPLATE_FAB_DIR)/$(BOARD)_pos.txt
	sed -e '1 s/Ref/Designator/' -e '1 s/PosX/Mid X/' -e '1 s/PosY/Mid Y/' -e '1 s/Rot/Rotation/' -e '1 s/Side/Layer/' $(TEMPLATE_FAB_DIR)/$(BOARD)_pos.csv > $(TEMPLATE_FAB_DIR)/$(BOARD)_pos_jlcpcb.csv

models: $(BOARD).kicad_pcb
	kicad-cli pcb export step --subst-models $< -o $(TEMPLATE_FAB_DIR)/$(BOARD)_model.step ; \
		rc=$$?; if [ $$rc -ne 0 ] && [ $$rc -ne 2 ]; then exit $$rc; fi
	kicad-cli pcb export vrml $< -o $(TEMPLATE_FAB_DIR)/$(BOARD)_model.vrml
	@gzip -c $(TEMPLATE_FAB_DIR)/$(BOARD)_model.vrml > $(TEMPLATE_FAB_DIR)/$(BOARD)_model.vrml.gz
	@xz -f $(TEMPLATE_FAB_DIR)/$(BOARD)_model.step
	@xz -f $(TEMPLATE_FAB_DIR)/$(BOARD)_model.vrml
	@touch $(TEMPLATE_FAB_DIR)

render: $(BOARD).kicad_pcb
	@mkdir -p $(TEMPLATE_RENDER_DIR)
	kicad-cli pcb render $(RENDER_ARGS) --side top -o $(TEMPLATE_RENDER_DIR)/$(BOARD)-front.png $^
	kicad-cli pcb render $(RENDER_ARGS) --side bottom -o $(TEMPLATE_RENDER_DIR)/$(BOARD)-back.png $^
	kicad-cli pcb render $(RENDER_ARGS) --side top --rotate "315,0,315" -o $(TEMPLATE_RENDER_DIR)/$(BOARD)-preview.png $^

$(TEMPLATE_FAB_DIR)/gerbers_%.zip: $(TEMPLATE_BUILD_DIR)/panel/$(BOARD)_panel.kicad_pcb
	@mkdir -p $(TEMPLATE_FAB_DIR)
	kikit fab $* --no-drc $< $(TEMPLATE_BUILD_DIR)/fab_$*
	@cp $(TEMPLATE_BUILD_DIR)/fab_$*/gerbers.zip $@

$(TEMPLATE_BUILD_DIR)/panel/$(BOARD)_panel.kicad_pcb: $(BOARD).kicad_pcb
	@mkdir -p $(TEMPLATE_BUILD_DIR)/panel
	kikit panelize -p ./panel.json $< $@

# Convert .md → build/.html using python-markdown
build/%.html: %.md
	@mkdir -p build
	python3 -m markdown $< > $@

build/%.html.j2: present/template/%.html.j2
	@mkdir -p build
	@cp $< $@

build/%.json: present/template/%.json
	@cp $< $@

build/web/%.html: build/%.html.j2 build/%.json build/README.html
	@mkdir -p build/web
	@rsync -a $(STATIC_DIRS) build/web/
	JINJA2_PATH=build jinja2 --format=json -D datetime="$$(date '+%Y-%m-%d %H:%M UTC')" $< build/$*.json -o $@

clean:
	rm -rf build
