/**
 * VRML Viewer Custom Element
 * Web component for displaying VRML files using ThreeJS with responsive design and touch support
 */

import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    AmbientLight,
    DirectionalLight,
    Box3,
    Vector3,
    LinearToneMapping
} from 'three';
import { VRMLLoader } from 'three/addons/loaders/VRMLLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 600;
const DEFAULT_BACKGROUND = '#f8f8f8';

// Inject embedded CSS styles once to avoid duplicates
if (!document.querySelector('style[data-vrml-viewer]')) {
    const style = document.createElement('style');
    style.setAttribute('data-vrml-viewer', 'true');
    style.textContent = `
/* VRML Viewer Embedded Styles */
vrml-viewer {
    display: block;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    overflow: hidden;
    background: #fafafa;
    
    /* Default fixed size */
    width: var(--vrml-width, 800px);
    height: var(--vrml-height, 600px);
}

/* Responsive viewer - simplified approach */
vrml-viewer[responsive="true"],
vrml-viewer.responsive-viewer {
    width: 100%;
    height: auto;
    aspect-ratio: var(--vrml-aspect-ratio, 3/2);
    min-height: clamp(250px, 40vh, 400px);
    max-height: 85vh;
}

/* Container and canvas */
.vrml-viewer-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.vrml-viewer-canvas {
    display: block;
    width: 100%;
    height: 100%;
}

/* Controls */
.vrml-viewer-controls {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    gap: 4px;
    z-index: 1000;
}

.vrml-viewer-btn {
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    padding: 6px 10px;
    cursor: pointer;
    font-size: 11px;
    font-weight: 500;
    transition: all 0.2s ease;
    min-height: 32px;
    min-width: 50px;
}

.vrml-viewer-btn:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
}

.vrml-viewer-btn:active {
    transform: translateY(0);
}

/* Load button */
.vrml-viewer-load-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 1001;
}

.vrml-viewer-load-btn:hover {
    background: #0056b3;
    transform: translate(-50%, -50%) translateY(-1px);
}

/* Loading and error states */
.vrml-viewer-loading,
.vrml-viewer-error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.95);
    padding: 20px;
    border-radius: 6px;
    text-align: center;
    z-index: 1001;
    border: 1px solid rgba(0, 0, 0, 0.1);
    max-width: 80%;
}

.vrml-viewer-error {
    color: #d32f2f;
    border-color: rgba(211, 47, 47, 0.2);
}

.vrml-viewer-spinner {
    border: 2px solid #f3f3f3;
    border-top: 2px solid #007bff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: vrml-spin 1s linear infinite;
    margin: 0 auto 10px;
}

@keyframes vrml-spin {
    to { transform: rotate(360deg); }
}

.vrml-viewer-loading div:last-child {
    color: #666;
    font-size: 12px;
    font-weight: 500;
}

.vrml-viewer-error h3 {
    margin: 0 0 8px 0;
    font-size: 14px;
    font-weight: 600;
}

.vrml-viewer-error p {
    margin: 0;
    font-size: 12px;
    font-weight: 400;
}

/* Fullscreen styles */
vrml-viewer:fullscreen {
    width: 100vw !important;
    height: 100vh !important;
    border: none;
    border-radius: 0;
}

/* Simplified responsive breakpoints - only 2 instead of 5 */
@media (max-width: 768px) {
    /* Mobile and tablet adjustments */
    vrml-viewer[responsive="true"],
    vrml-viewer.responsive-viewer {
        aspect-ratio: 4/3; /* More square for mobile */
        min-height: clamp(250px, 35vh, 350px);
        max-height: 70vh;
    }
    
    .vrml-viewer-controls {
        top: 6px;
        right: 6px;
        flex-direction: column;
        gap: 4px;
    }
    
    .vrml-viewer-btn {
        padding: 8px 12px;
        font-size: 11px;
        min-width: 60px;
        min-height: 36px;
    }
    
    .vrml-viewer-load-btn {
        padding: 14px 20px;
        font-size: 15px;
        min-width: 120px;
        min-height: 44px;
    }
}

/* Touch-friendly enhancements */
@media (hover: none) and (pointer: coarse) {
    .vrml-viewer-btn {
        min-height: 44px;
        min-width: 44px;
        padding: 10px 14px;
        font-size: 12px;
    }
    
    .vrml-viewer-load-btn {
        min-height: 48px;
        min-width: 140px;
        padding: 16px 24px;
        font-size: 16px;
    }
}

/* Dark theme support */
@media (prefers-color-scheme: dark) {
    vrml-viewer {
        border-color: rgba(255, 255, 255, 0.1);
        background: #1a1a1a;
    }
    
    .vrml-viewer-btn {
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        border-color: rgba(255, 255, 255, 0.1);
    }
    
    .vrml-viewer-btn:hover {
        background: rgba(0, 0, 0, 0.9);
        border-color: rgba(255, 255, 255, 0.2);
    }
    
    .vrml-viewer-loading,
    .vrml-viewer-load-btn {
        background: rgba(0, 0, 0, 0.9);
        border-color: rgba(255, 255, 255, 0.1);
    }
    
    .vrml-viewer-loading div:last-child {
        color: #ccc;
    }
    
    .vrml-viewer-error {
        background: rgba(0, 0, 0, 0.9);
        color: #ff6b6b;
        border-color: rgba(255, 107, 107, 0.2);
    }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    vrml-viewer {
        border-width: 0.5px;
    }
    
    .vrml-viewer-btn {
        border-width: 0.5px;
    }
}
`;
    document.head.appendChild(style);
}

// GZIP detection and decompression utilities
function isGzipFile(url) {
    return url.toLowerCase().endsWith('.gz');
}

// Handle both modern DecompressionStream and fallback for older browsers
async function fetchAndDecompress(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        if ('DecompressionStream' in window) {
            // Modern browsers: use native streaming decompression
            const decompressedStream = response.body
                .pipeThrough(new DecompressionStream('gzip'));
            const decompressedResponse = new Response(decompressedStream);
            return await decompressedResponse.text();
        } else {
            // Legacy browsers: rely on server-side decompression
            const fallbackResponse = await fetch(url, {
                headers: { 'Accept-Encoding': 'gzip' }
            });
            if (!fallbackResponse.ok) {
                throw new Error(`HTTP ${fallbackResponse.status}: ${fallbackResponse.statusText}`);
            }
            return await fallbackResponse.text();
        }
    } catch (error) {
        throw new Error(`Failed to fetch/decompress file: ${error.message}`);
    }
}

async function fetchVRMLFile(url) {
    if (isGzipFile(url)) {
        return await fetchAndDecompress(url);
    } else {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return await response.text();
    }
}

// Basic VRML content validation - checks for common VRML keywords
function validateVRMLContent(content) {
    if (!content || typeof content !== 'string') return false;
    const trimmed = content.trim();
    return trimmed.startsWith('#VRML') ||
           trimmed.includes('VRML') ||
           trimmed.includes('Shape') ||
           trimmed.includes('geometry') ||
           trimmed.includes('IndexedFaceSet');
}

class VRMLViewer extends HTMLElement {
    constructor() {
        super();
        
        // ThreeJS core components
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.model = null;
        this.isLoading = false;
        this.initialCameraPosition = null;
        this.initialCameraTarget = null;
        
        // Render-on-demand optimization to improve performance
        this.needsRender = true;
        this.resizeTimeout = null;
        
        // Bind event handlers to maintain correct 'this' context
        this.handleResize = this.handleResize.bind(this);
        this.resetView = this.resetView.bind(this);
        this.toggleFullscreen = this.toggleFullscreen.bind(this);
        
        this.createDOM();
    }
    
    static get observedAttributes() {
        return ['src', 'width', 'height', 'background-color', 'autoload', 'model-size', 'responsive'];
    }
    
    createDOM() {
        this.innerHTML = `
            <div class="vrml-viewer-container">
                <canvas class="vrml-viewer-canvas"></canvas>
                <div class="vrml-viewer-controls">
                    <button class="vrml-viewer-btn" id="reset-btn" title="Reset View">Reset</button>
                    <button class="vrml-viewer-btn fullscreen" id="fullscreen-btn" title="Toggle Fullscreen">Fullscreen</button>
                </div>
                <button class="vrml-viewer-load-btn" id="load-btn" style="display: none;">Load Model</button>
                <div class="vrml-viewer-loading" style="display: none;">
                    <div class="vrml-viewer-spinner"></div>
                    <div>Loading VRML...</div>
                </div>
                <div class="vrml-viewer-error" style="display: none;">
                    <h3>Error Loading VRML</h3>
                    <p id="error-message"></p>
                </div>
            </div>
        `;
        
        // Get references
        this.canvas = this.querySelector('.vrml-viewer-canvas');
        this.loadingEl = this.querySelector('.vrml-viewer-loading');
        this.errorEl = this.querySelector('.vrml-viewer-error');
        this.errorMessageEl = this.querySelector('#error-message');
        this.loadBtnEl = this.querySelector('#load-btn');
        
        // Add event listeners
        this.querySelector('#reset-btn').addEventListener('click', this.resetView);
        this.querySelector('#fullscreen-btn').addEventListener('click', this.toggleFullscreen);
        this.loadBtnEl.addEventListener('click', () => this.handleLoadButtonClick());
    }
    
    async connectedCallback() {
        try {
            await this.initViewer();
            
            // Wait for CSS layout completion before sizing calculations
            requestAnimationFrame(() => {
                this.updateSize();
                this.updateBackgroundColor();
                
                // Handle autoload behavior
                const src = this.getAttribute('src');
                const autoload = this.getAttribute('autoload');
                const shouldAutoload = autoload === null || autoload === '' || autoload === 'true';
                
                if (src && shouldAutoload) {
                    this.loadModel(src);
                } else if (src && !shouldAutoload) {
                    this.showLoadButton();
                }
            });
            
            this.startRenderLoop();
            window.addEventListener('resize', this.handleResize);
            
            // Cross-browser fullscreen event listeners
            document.addEventListener('fullscreenchange', () => this.handleFullscreenChange());
            document.addEventListener('webkitfullscreenchange', () => this.handleFullscreenChange());
            document.addEventListener('mozfullscreenchange', () => this.handleFullscreenChange());
            document.addEventListener('MSFullscreenChange', () => this.handleFullscreenChange());
        } catch (error) {
            this.showError(`Failed to initialize viewer: ${error.message}`);
        }
    }
    
    disconnectedCallback() {
        window.removeEventListener('resize', this.handleResize);
        document.removeEventListener('fullscreenchange', () => this.handleFullscreenChange());
        document.removeEventListener('webkitfullscreenchange', () => this.handleFullscreenChange());
        document.removeEventListener('mozfullscreenchange', () => this.handleFullscreenChange());
        document.removeEventListener('MSFullscreenChange', () => this.handleFullscreenChange());
        
        this.stopRenderLoop();
        
        if (this.renderer) this.renderer.dispose();
        if (this.controls) this.controls.dispose();
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;
        
        switch (name) {
            case 'src':
                if (newValue && this.renderer) {
                    const autoload = this.getAttribute('autoload');
                    const shouldAutoload = autoload === null || autoload === '' || autoload === 'true';
                    
                    if (shouldAutoload) {
                        this.hideLoadButton();
                        this.loadModel(newValue);
                    } else {
                        this.showLoadButton();
                    }
                }
                break;
            case 'autoload':
                const src = this.getAttribute('src');
                const shouldAutoload = newValue === null || newValue === '' || newValue === 'true';
                
                if (shouldAutoload && src && this.renderer) {
                    this.hideLoadButton();
                    this.loadModel(src);
                } else if (!shouldAutoload && src) {
                    this.showLoadButton();
                } else {
                    this.hideLoadButton();
                }
                break;
            case 'width':
            case 'height':
            case 'responsive':
                this.updateSize();
                break;
            case 'background-color':
                this.updateBackgroundColor();
                break;
            case 'model-size':
                if (this.model) this.fitCameraToModel();
                break;
        }
    }
    
    async initViewer() {
        this.scene = new Scene();
        
        const width = this.getWidth();
        const height = this.getHeight();
        this.camera = new PerspectiveCamera(60, width / height, 0.01, 1000);
        this.camera.position.set(0, 0, 5);
        
        // Configure renderer for optimal PCB visualization
        this.renderer = new WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap at 2x for performance
        this.renderer.shadowMap.enabled = false; // Shadows not needed for PCB viewing
        this.renderer.toneMapping = LinearToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        this.renderer.outputColorSpace = 'srgb';
        
        this.setupLighting();
        
        // Configure orbit controls for 3D model interaction
        this.controls = new OrbitControls(this.camera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.screenSpacePanning = false;
        this.controls.minDistance = 0.01;
        this.controls.maxDistance = 100;
        this.controls.maxPolarAngle = Math.PI;
        
        // Touch device optimizations
        if ('ontouchstart' in window) {
            this.controls.rotateSpeed = 0.8;
            this.controls.zoomSpeed = 1.2;
            this.controls.panSpeed = 0.8;
        }
        
        this.controls.addEventListener('change', () => {
            this.needsRender = true;
        });
    }
    
    setupLighting() {
        // Three-point lighting setup optimized for PCB visualization
        const ambientLight = new AmbientLight(0x808080, 1.2); // Base illumination
        this.scene.add(ambientLight);
        
        const directionalLight = new DirectionalLight(0xffffff, 1.5); // Key light
        directionalLight.position.set(10, 10, 8);
        this.scene.add(directionalLight);
        
        const fillLight = new DirectionalLight(0xffffff, 0.8); // Fill light from opposite side
        fillLight.position.set(-8, -8, -6);
        this.scene.add(fillLight);
    }
    
    async loadModel(src) {
        if (this.isLoading) return;
        
        this.isLoading = true;
        this.showLoading();
        this.hideError();
        
        try {
            this.disposeModel();
            
            const vrmlContent = await fetchVRMLFile(src);
            
            if (!validateVRMLContent(vrmlContent)) {
                throw new Error('Invalid VRML content');
            }
            
            const loader = new VRMLLoader();
            this.model = loader.parse(vrmlContent);
            this.scene.add(this.model);
            this.fitCameraToModel();
            
            this.hideLoading();
            this.hideLoadButton();
            this.needsRender = true;
        } catch (error) {
            this.hideLoading();
            this.showError(`Failed to load VRML: ${error.message}`);
        } finally {
            this.isLoading = false;
        }
    }
    
    // Proper WebGL resource cleanup to prevent memory leaks
    disposeModel() {
        if (this.model) {
            this.model.traverse((child) => {
                if (child.geometry) child.geometry.dispose();
                if (child.material) {
                    if (Array.isArray(child.material)) {
                        child.material.forEach(material => material.dispose());
                    } else {
                        child.material.dispose();
                    }
                }
                if (child.texture) child.texture.dispose();
            });
            this.scene.remove(this.model);
            this.model = null;
        }
    }
    
    // Calculate optimal camera position based on model bounding box
    fitCameraToModel() {
        if (!this.model) return;
        
        const box = new Box3().setFromObject(this.model);
        const size = box.getSize(new Vector3());
        const center = box.getCenter(new Vector3());
        
        // Calculate camera distance using field of view and model size
        const modelSizeMultiplier = parseFloat(this.getAttribute('model-size')) || 1.0;
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = this.camera.fov * (Math.PI / 180);
        let cameraDistance = Math.abs(maxDim / Math.sin(fov / 2)) * 0.8 * modelSizeMultiplier;
        cameraDistance = Math.max(cameraDistance, maxDim * 1.5); // Ensure minimum distance
        
        // Position camera with slight elevation for better PCB viewing angle
        this.camera.position.copy(center);
        this.camera.position.z += cameraDistance;
        this.camera.position.y += cameraDistance * 0.1;
        this.camera.lookAt(center);
        
        this.controls.target.copy(center);
        this.controls.update();
        
        // Store initial position for reset functionality
        this.initialCameraPosition = this.camera.position.clone();
        this.initialCameraTarget = center.clone();
        this.needsRender = true;
    }
    
    resetView() {
        if (this.initialCameraPosition && this.initialCameraTarget) {
            this.camera.position.copy(this.initialCameraPosition);
            this.controls.target.copy(this.initialCameraTarget);
            this.controls.update();
            this.needsRender = true;
        } else if (this.model) {
            this.fitCameraToModel();
        }
    }
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.requestFullscreen().catch(err => {
                console.warn('Could not enter fullscreen:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }
    
    // Render-on-demand loop for optimal performance
    startRenderLoop() {
        const animate = () => {
            this.animationId = requestAnimationFrame(animate);
            
            let hasChanges = false;
            if (this.controls && this.controls.enabled) {
                hasChanges = this.controls.update() || hasChanges;
            }
            
            // Only render when changes occur to save GPU resources
            if (this.needsRender || hasChanges) {
                if (this.renderer && this.scene && this.camera) {
                    this.renderer.render(this.scene, this.camera);
                    this.needsRender = false;
                }
            }
        };
        animate();
    }
    
    stopRenderLoop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
    
    // Debounced resize handler to prevent excessive recalculations
    handleResize() {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            this.updateSize();
            if (this.isResponsive() && this.model) {
                this.fitCameraToModel();
            }
        }, 150);
    }
    
    handleFullscreenChange() {
        setTimeout(() => this.updateSize(), 100);
    }
    
    updateSize() {
        if (!this.renderer || !this.camera) return;
        
        const width = this.getWidth();
        const height = this.getHeight();
        
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
        this.needsRender = true;
    }
    
    updateBackgroundColor() {
        if (!this.renderer) return;
        const color = this.getAttribute('background-color') || DEFAULT_BACKGROUND;
        this.renderer.setClearColor(color);
        this.needsRender = true;
    }
    
    getWidth() {
        if (this.isFullscreen()) return window.innerWidth;
        if (this.isResponsive()) return this.clientWidth || this.getBoundingClientRect().width || DEFAULT_WIDTH;
        return parseInt(this.getAttribute('width')) || DEFAULT_WIDTH;
    }
    
    getHeight() {
        if (this.isFullscreen()) return window.innerHeight;
        if (this.isResponsive()) return this.clientHeight || this.getBoundingClientRect().height || DEFAULT_HEIGHT;
        return parseInt(this.getAttribute('height')) || DEFAULT_HEIGHT;
    }
    
    isFullscreen() {
        return document.fullscreenElement === this ||
               document.webkitFullscreenElement === this ||
               document.mozFullScreenElement === this ||
               document.msFullscreenElement === this;
    }
    
    isResponsive() {
        return this.getAttribute('responsive') === 'true' || this.classList.contains('responsive-viewer');
    }
    
    // UI state management
    showLoading() { this.loadingEl.style.display = 'block'; }
    hideLoading() { this.loadingEl.style.display = 'none'; }
    showError(message) {
        this.errorMessageEl.textContent = message;
        this.errorEl.style.display = 'block';
    }
    hideError() { this.errorEl.style.display = 'none'; }
    showLoadButton() { if (this.loadBtnEl) this.loadBtnEl.style.display = 'block'; }
    hideLoadButton() { if (this.loadBtnEl) this.loadBtnEl.style.display = 'none'; }
    
    // Public API
    async load(src = null) {
        const sourceUrl = src || this.getAttribute('src');
        if (!sourceUrl) {
            throw new Error('No source URL provided and no src attribute set');
        }
        
        if (src && src !== this.getAttribute('src')) {
            this.setAttribute('src', src);
        }
        
        await this.loadModel(sourceUrl);
    }
    
    clear() {
        this.disposeModel();
        this.hideError();
        this.hideLoading();
        
        const src = this.getAttribute('src');
        const autoload = this.getAttribute('autoload');
        const shouldAutoload = autoload === null || autoload === '' || autoload === 'true';
        
        if (src && !shouldAutoload) {
            this.showLoadButton();
        }
        
        this.needsRender = true;
    }
    
    async handleLoadButtonClick() {
        const src = this.getAttribute('src');
        if (src) await this.load(src);
    }
}

customElements.define('vrml-viewer', VRMLViewer);
