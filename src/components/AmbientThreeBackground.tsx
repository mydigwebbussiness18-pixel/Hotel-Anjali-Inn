import {useEffect, useRef} from 'react';
import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';

// Pre-allocated scratch helpers (zero per-frame allocations)
const _dummy = new THREE.Object3D();
const _color = new THREE.Color();

interface RingInstance {
  x: number;
  y: number;
  z: number;
  scale: number;
  rotSpeedX: number;
  rotSpeedY: number;
  rotSpeedZ: number;
  phase: number;
  driftAmp: number;
}

interface BokehInstance {
  x: number;
  y: number;
  z: number;
  scale: number;
  phase: number;
  speed: number;
  driftX: number;
  driftY: number;
}

function detectSoftwareWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2') ||
      (canvas.getContext('webgl') as WebGLRenderingContext | null);
    if (!gl) return true;
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
    const gpu = String(gl.getParameter(param) || '');
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
  } catch {
    return true;
  }
}

function createGlowOrbTexture(innerHex: string, midHex: string): THREE.CanvasTexture {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const half = size / 2;
    const grad = ctx.createRadialGradient(half, half, 0, half, half, half);
    grad.addColorStop(0, innerHex);
    grad.addColorStop(0.32, midHex);
    grad.addColorStop(0.7, 'rgba(212, 175, 95, 0.08)');
    grad.addColorStop(1, 'rgba(13, 25, 46, 0.0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

export function AmbientThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isSoftwareGl = detectSoftwareWebGL();
    const isSmallViewport = window.innerWidth < 768;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = motionQuery.matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !isSoftwareGl,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.setClearColor(0x000000, 0);

    const initialWidth = Math.max(
      container.clientWidth || document.documentElement.clientWidth,
      1,
    );
    const initialHeight = Math.max(
      container.clientHeight || document.documentElement.clientHeight,
      1,
    );

    renderer.setPixelRatio(
      isSoftwareGl ? 1 : Math.min(window.devicePixelRatio || 1, 2),
    );
    renderer.setSize(initialWidth, initialHeight, false);

    const canvasEl = renderer.domElement;
    canvasEl.style.display = 'block';
    canvasEl.style.width = '100%';
    canvasEl.style.height = '100%';
    canvasEl.style.maxWidth = '100%';
    canvasEl.style.pointerEvents = 'none';
    container.appendChild(canvasEl);

    const scene = new THREE.Scene();

    // Studio environment reflection map for rich metallic gold reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const roomEnv = new RoomEnvironment();
    const envTarget = pmremGenerator.fromScene(roomEnv, 0.04);
    scene.environment = envTarget.texture;
    roomEnv.dispose();
    pmremGenerator.dispose();

    const camera = new THREE.PerspectiveCamera(
      45,
      initialWidth / initialHeight,
      0.1,
      65,
    );
    camera.position.set(0, 0, 12.5);

    // Warm Champagne Key + Cool Royal Sapphire Hemisphere + Gold Rim + Interactive Cursor Light
    const hemiLight = new THREE.HemisphereLight(0x5278b8, 0x9a712c, 1.05);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xffe9be, 2.5);
    keyLight.position.set(7, 9, 8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x285499, 1.5);
    rimLight.position.set(-8, -5, 5);
    scene.add(rimLight);

    const cursorLight = new THREE.PointLight(0xf4dfb0, 3.4, 24, 1.5);
    cursorLight.position.set(0, 0, 5.5);
    scene.add(cursorLight);

    // Multi-layer depth groups
    const farGroup = new THREE.Group();
    const midGroup = new THREE.Group();
    const nearGroup = new THREE.Group();
    scene.add(farGroup, midGroup, nearGroup);

    // Deterministic editorial distribution
    let seed = 7319;
    const nextRand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    // -----------------------------------------------------------------------
    // Layer 1: Far Atmospheric Gold & Royal-Sapphire Glowing Bokeh Orbs
    // -----------------------------------------------------------------------
    const bokehCount = isSmallViewport ? 20 : 30;
    const goldOrbTex = createGlowOrbTexture(
      'rgba(244, 223, 176, 0.68)',
      'rgba(212, 175, 95, 0.32)',
    );
    const sapphireOrbTex = createGlowOrbTexture(
      'rgba(74, 122, 204, 0.55)',
      'rgba(26, 61, 122, 0.26)',
    );

    const bokehGeo = new THREE.PlaneGeometry(1, 1);
    const goldBokehMat = new THREE.MeshBasicMaterial({
      map: goldOrbTex,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });
    const sapphireBokehMat = new THREE.MeshBasicMaterial({
      map: sapphireOrbTex,
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const goldOrbCount = Math.ceil(bokehCount * 0.65);
    const sapphireOrbCount = bokehCount - goldOrbCount;

    const goldOrbMesh = new THREE.InstancedMesh(bokehGeo, goldBokehMat, goldOrbCount);
    goldOrbMesh.frustumCulled = false;

    const sapphireOrbMesh = new THREE.InstancedMesh(
      bokehGeo,
      sapphireBokehMat,
      sapphireOrbCount,
    );
    sapphireOrbMesh.frustumCulled = false;

    const goldOrbs: BokehInstance[] = [];
    const sapphireOrbs: BokehInstance[] = [];

    for (let i = 0; i < bokehCount; i++) {
      const sideBias = i % 2 === 0 ? -1 : 1;
      const item: BokehInstance = {
        x: sideBias * (2.2 + nextRand() * 11.8),
        y: (nextRand() - 0.5) * 14,
        z: -11.5 - nextRand() * 8.5,
        scale: 2.3 + nextRand() * 3.8,
        phase: nextRand() * Math.PI * 2,
        speed: 0.14 + nextRand() * 0.18,
        driftX: 0.25 + nextRand() * 0.38,
        driftY: 0.25 + nextRand() * 0.42,
      };
      if (i < goldOrbCount) {
        goldOrbs.push(item);
      } else {
        sapphireOrbs.push(item);
      }
    }
    farGroup.add(goldOrbMesh, sapphireOrbMesh);

    // -----------------------------------------------------------------------
    // Layer 2: Mid-Depth Architectural Gold Rings, Crown Halos & Crystal Prisms
    // -----------------------------------------------------------------------
    const ringCount = isSmallViewport ? 8 : 14;
    const ringGeo = new THREE.TorusGeometry(0.58, 0.024, 16, 56);
    const ringMat = new THREE.MeshPhysicalMaterial({
      color: 0xd4af5f,
      metalness: 0.94,
      roughness: 0.16,
      clearcoat: 0.75,
      clearcoatRoughness: 0.18,
      anisotropy: 0.7,
      transparent: true,
      opacity: 0.26,
      depthWrite: false,
    });
    const ringMesh = new THREE.InstancedMesh(ringGeo, ringMat, ringCount);
    ringMesh.frustumCulled = false;

    const ringItems: RingInstance[] = [];
    const ringPalette = [0xf4dfb0, 0xd4af5f, 0xb68b3c, 0x3b67b0];
    for (let i = 0; i < ringCount; i++) {
      const side = i % 2 === 0 ? -1 : 1;
      const x = side * (3.5 + nextRand() * 7.2);
      const y = (nextRand() - 0.5) * 12;
      const z = -6.5 + nextRand() * 4.5;
      const scale = 0.65 + nextRand() * 1.2;

      ringItems.push({
        x,
        y,
        z,
        scale,
        rotSpeedX: (nextRand() - 0.5) * 0.2,
        rotSpeedY: (nextRand() - 0.5) * 0.24,
        rotSpeedZ: (nextRand() - 0.5) * 0.14,
        phase: nextRand() * Math.PI * 2,
        driftAmp: 0.22 + nextRand() * 0.3,
      });

      _dummy.position.set(x, y, z);
      _dummy.rotation.set(nextRand() * Math.PI, nextRand() * Math.PI, 0);
      _dummy.scale.setScalar(scale);
      _dummy.updateMatrix();
      ringMesh.setMatrixAt(i, _dummy.matrix);

      _color.setHex(ringPalette[i % ringPalette.length]);
      ringMesh.setColorAt(i, _color);
    }
    ringMesh.instanceMatrix.needsUpdate = true;
    if (ringMesh.instanceColor) ringMesh.instanceColor.needsUpdate = true;
    midGroup.add(ringMesh);

    const facetCount = isSmallViewport ? 9 : 16;
    const facetGeo = new THREE.OctahedronGeometry(0.19, 0);
    const facetMat = new THREE.MeshPhysicalMaterial({
      color: 0xf4dfb0,
      metalness: 0.92,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
    });
    const facetMesh = new THREE.InstancedMesh(facetGeo, facetMat, facetCount);
    facetMesh.frustumCulled = false;

    const facetItems: RingInstance[] = [];
    const facetPalette = [0xf4dfb0, 0xd4af5f, 0x4f80cc];
    for (let i = 0; i < facetCount; i++) {
      const side = i % 2 === 0 ? 1 : -1;
      const x = side * (2.2 + nextRand() * 8.2);
      const y = (nextRand() - 0.5) * 11.5;
      const z = -4.5 + nextRand() * 4.8;
      const scale = 0.55 + nextRand() * 1.05;

      facetItems.push({
        x,
        y,
        z,
        scale,
        rotSpeedX: (nextRand() - 0.5) * 0.38,
        rotSpeedY: (nextRand() - 0.5) * 0.42,
        rotSpeedZ: (nextRand() - 0.5) * 0.25,
        phase: nextRand() * Math.PI * 2,
        driftAmp: 0.2 + nextRand() * 0.26,
      });

      _dummy.position.set(x, y, z);
      _dummy.rotation.set(nextRand() * Math.PI, nextRand() * Math.PI, 0);
      _dummy.scale.setScalar(scale);
      _dummy.updateMatrix();
      facetMesh.setMatrixAt(i, _dummy.matrix);

      _color.setHex(facetPalette[i % facetPalette.length]);
      facetMesh.setColorAt(i, _color);
    }
    facetMesh.instanceMatrix.needsUpdate = true;
    if (facetMesh.instanceColor) facetMesh.instanceColor.needsUpdate = true;
    midGroup.add(facetMesh);

    // -----------------------------------------------------------------------
    // Layer 3: Floating 3D Metallic Gold & Champagne Dust Particle Field
    // -----------------------------------------------------------------------
    const particleCount = isSmallViewport ? 110 : 195;
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const phases = new Float32Array(particleCount);
    const tints = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (nextRand() - 0.5) * 21;
      positions[i * 3 + 1] = (nextRand() - 0.5) * 14.5;
      positions[i * 3 + 2] = -6 + nextRand() * 9.5;
      scales[i] = 0.55 + nextRand() * 1.55;
      phases[i] = nextRand() * Math.PI * 2;
      tints[i] = nextRand();
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
    particleGeo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
    particleGeo.setAttribute('aTint', new THREE.BufferAttribute(tints, 1));

    const particleMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: {value: 0},
        uPixelRatio: {
          value: isSoftwareGl ? 1 : Math.min(window.devicePixelRatio || 1, 2),
        },
        uColorGoldDeep: {value: new THREE.Color(0xb68b3c)},
        uColorChampagne: {value: new THREE.Color(0xf4dfb0)},
        uColorSapphire: {value: new THREE.Color(0x4b79c6)},
      },
      vertexShader: `
        attribute float aScale;
        attribute float aPhase;
        attribute float aTint;
        uniform float uTime;
        uniform float uPixelRatio;
        varying float vAlpha;
        varying float vTint;

        void main() {
          vec3 pos = position;
          pos.y += sin(uTime * 0.42 + aPhase) * 0.4;
          pos.x += cos(uTime * 0.31 + aPhase * 1.3) * 0.26;
          pos.z += sin(uTime * 0.24 + aPhase * 0.8) * 0.18;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          float depthScale = 12.5 / max(-mvPosition.z, 2.0);
          gl_PointSize = clamp(aScale * depthScale * uPixelRatio * 4.6, 2.0, 26.0);

          float twinkle = 0.65 + 0.35 * sin(uTime * 0.95 + aPhase * 2.1);
          float depthFade = smoothstep(20.0, 4.0, -mvPosition.z);
          vAlpha = twinkle * depthFade * 0.48;
          vTint = aTint;
        }
      `,
      fragmentShader: `
        uniform vec3 uColorGoldDeep;
        uniform vec3 uColorChampagne;
        uniform vec3 uColorSapphire;
        varying float vAlpha;
        varying float vTint;

        void main() {
          vec2 cxy = 2.0 * gl_PointCoord - 1.0;
          float r2 = dot(cxy, cxy);
          if (r2 > 1.0) discard;

          float softEdge = pow(1.0 - r2, 2.1);
          vec3 col = vTint < 0.78
            ? mix(uColorGoldDeep, uColorChampagne, vTint / 0.78)
            : mix(uColorChampagne, uColorSapphire, (vTint - 0.78) / 0.22);
          gl_FragColor = vec4(col, softEdge * vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    particles.frustumCulled = false;
    nearGroup.add(particles);

    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }

    // -----------------------------------------------------------------------
    // Interaction State (Mouse + Scroll Parallax with Exponential Damping)
    // -----------------------------------------------------------------------
    let targetPointerX = 0;
    let targetPointerY = 0;
    let currentPointerX = 0;
    let currentPointerY = 0;

    let targetScrollRatio = 0;
    let currentScrollRatio = 0;

    const updateScrollTarget = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      targetScrollRatio = THREE.MathUtils.clamp(window.scrollY / maxScroll, 0, 1);
    };
    updateScrollTarget();

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      targetPointerX = (e.clientX / Math.max(window.innerWidth, 1)) * 2 - 1;
      targetPointerY = -((e.clientY / Math.max(window.innerHeight, 1)) * 2 - 1);
    };

    const onScroll = () => {
      updateScrollTarget();
      if (prefersReducedMotion) {
        renderSceneFrame(0, 0);
      }
    };

    const onResize = () => {
      const width = Math.max(
        container.clientWidth || document.documentElement.clientWidth,
        1,
      );
      const height = Math.max(
        container.clientHeight || document.documentElement.clientHeight,
        1,
      );
      const pixelRatio = isSoftwareGl
        ? 1
        : Math.min(window.devicePixelRatio || 1, 2);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(width, height, false);
      particleMat.uniforms.uPixelRatio.value = pixelRatio;
      updateScrollTarget();

      if (prefersReducedMotion) {
        renderSceneFrame(0, 0);
      }
    };

    window.addEventListener('pointermove', onPointerMove, {passive: true});
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onResize, {passive: true});

    let frameId = 0;
    let disposed = false;
    let isVisible = !document.hidden;
    let elapsedTime = 0;
    let lastTimestamp = performance.now();

    function renderSceneFrame(elapsed: number, delta: number) {
      const lambda = prefersReducedMotion ? 100 : 3.4;
      const stepDelta = Math.min(delta, 0.05);

      currentPointerX = THREE.MathUtils.damp(
        currentPointerX,
        targetPointerX,
        lambda,
        stepDelta,
      );
      currentPointerY = THREE.MathUtils.damp(
        currentPointerY,
        targetPointerY,
        lambda,
        stepDelta,
      );
      currentScrollRatio = THREE.MathUtils.damp(
        currentScrollRatio,
        targetScrollRatio,
        4.4,
        stepDelta,
      );

      // Camera & lighting smooth parallax
      const scrollYOffset = (currentScrollRatio - 0.5) * -3.6;
      camera.position.x = currentPointerX * 0.65;
      camera.position.y = currentPointerY * 0.44 + scrollYOffset * 0.38;
      camera.lookAt(0, scrollYOffset * 0.16, -4);

      cursorLight.position.x = currentPointerX * 7.2;
      cursorLight.position.y = currentPointerY * 4.8 + scrollYOffset * 0.4;

      // Multi-depth parallax layers
      farGroup.position.x = -currentPointerX * 0.38;
      farGroup.position.y = -currentPointerY * 0.28 - scrollYOffset * 0.45;

      midGroup.position.x = -currentPointerX * 0.8;
      midGroup.position.y = -currentPointerY * 0.58 - scrollYOffset * 0.9;

      nearGroup.position.x = -currentPointerX * 1.25;
      nearGroup.position.y = -currentPointerY * 0.85 - scrollYOffset * 1.35;

      // Update far glow orbs
      for (let i = 0; i < goldOrbs.length; i++) {
        const item = goldOrbs[i];
        const px = item.x + Math.sin(elapsed * item.speed + item.phase) * item.driftX;
        const py = item.y + Math.cos(elapsed * item.speed * 0.85 + item.phase) * item.driftY;
        _dummy.position.set(px, py, item.z);
        _dummy.rotation.set(0, 0, 0);
        _dummy.scale.setScalar(item.scale);
        _dummy.updateMatrix();
        goldOrbMesh.setMatrixAt(i, _dummy.matrix);
      }
      goldOrbMesh.instanceMatrix.needsUpdate = true;

      for (let i = 0; i < sapphireOrbs.length; i++) {
        const item = sapphireOrbs[i];
        const px = item.x + Math.cos(elapsed * item.speed + item.phase) * item.driftX;
        const py = item.y + Math.sin(elapsed * item.speed * 0.9 + item.phase) * item.driftY;
        _dummy.position.set(px, py, item.z);
        _dummy.rotation.set(0, 0, 0);
        _dummy.scale.setScalar(item.scale);
        _dummy.updateMatrix();
        sapphireOrbMesh.setMatrixAt(i, _dummy.matrix);
      }
      sapphireOrbMesh.instanceMatrix.needsUpdate = true;

      // Update architectural gold rings
      for (let i = 0; i < ringCount; i++) {
        const item = ringItems[i];
        const py =
          item.y + Math.sin(elapsed * 0.3 + item.phase) * item.driftAmp;
        _dummy.position.set(item.x, py, item.z);
        _dummy.rotation.set(
          item.phase + elapsed * item.rotSpeedX + currentScrollRatio * 0.85,
          item.phase + elapsed * item.rotSpeedY + currentPointerX * 0.25,
          elapsed * item.rotSpeedZ,
        );
        _dummy.scale.setScalar(item.scale);
        _dummy.updateMatrix();
        ringMesh.setMatrixAt(i, _dummy.matrix);
      }
      ringMesh.instanceMatrix.needsUpdate = true;

      // Update faceted diamond/crystal accents
      for (let i = 0; i < facetCount; i++) {
        const item = facetItems[i];
        const py =
          item.y + Math.cos(elapsed * 0.38 + item.phase) * item.driftAmp;
        _dummy.position.set(item.x, py, item.z);
        _dummy.rotation.set(
          item.phase + elapsed * item.rotSpeedX,
          item.phase + elapsed * item.rotSpeedY + currentScrollRatio * 1.15,
          elapsed * item.rotSpeedZ,
        );
        _dummy.scale.setScalar(item.scale);
        _dummy.updateMatrix();
        facetMesh.setMatrixAt(i, _dummy.matrix);
      }
      facetMesh.instanceMatrix.needsUpdate = true;

      particleMat.uniforms.uTime.value = elapsed;

      renderer.render(scene, camera);
    }

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      if (!gl || typeof gl.fenceSync !== 'function') {
        frameId = window.setTimeout(cb, 80);
        return;
      }
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        if (disposed) return;
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    function tick(now: number) {
      if (disposed || !isVisible || prefersReducedMotion) return;
      const delta = Math.min((now - lastTimestamp) / 1000, 0.05);
      lastTimestamp = now;
      elapsedTime += delta;

      renderSceneFrame(elapsedTime, delta);

      if (isSoftwareGl) {
        afterDraw(() => tick(performance.now()));
      } else {
        frameId = requestAnimationFrame(tick);
      }
    }

    const startLoop = () => {
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      if (prefersReducedMotion) {
        renderSceneFrame(0, 0.016);
        return;
      }
      lastTimestamp = performance.now();
      if (isSoftwareGl) {
        tick(lastTimestamp);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    };

    const onVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        startLoop();
      } else {
        cancelAnimationFrame(frameId);
        clearTimeout(frameId);
      }
    };

    const onMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      startLoop();
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    motionQuery.addEventListener('change', onMotionChange);

    startLoop();

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      motionQuery.removeEventListener('change', onMotionChange);

      bokehGeo.dispose();
      goldBokehMat.dispose();
      sapphireBokehMat.dispose();
      goldOrbTex.dispose();
      sapphireOrbTex.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      facetGeo.dispose();
      facetMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      envTarget.dispose();
      renderer.dispose();

      if (canvasEl.parentNode === container) {
        container.removeChild(canvasEl);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    />
  );
}
