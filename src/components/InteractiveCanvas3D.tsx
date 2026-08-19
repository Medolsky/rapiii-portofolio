import React, { useRef, useState, useEffect, Suspense, Component } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Compass, Sliders, Box, Info } from "lucide-react";

// Robust Error Boundary to handle GLTF load or WebGL render crashes
class ViewportErrorBoundary extends Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  props!: { children: React.ReactNode; fallback: React.ReactNode };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("3D Viewport error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}


// 1. GTA V GLB loader component
function GtaModel({ url, renderMode, themeColor }: { url: string; renderMode: string; themeColor: string }) {
  const { scene } = useGLTF(url);
  const originalMaterials = useRef<Map<string, THREE.Material>>(new Map());
  
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Cache original material references
        if (!originalMaterials.current.has(child.uuid)) {
          originalMaterials.current.set(child.uuid, child.material);
        }

        if (renderMode === "wireframe") {
          child.material = new THREE.MeshBasicMaterial({ wireframe: true, color: themeColor });
        } else if (renderMode === "xray") {
          child.material = new THREE.MeshStandardMaterial({
            color: "#06b6d4",
            transparent: true,
            opacity: 0.35,
            roughness: 0.1,
            metalness: 0.9,
            emissive: new THREE.Color("#06b6d4"),
            emissiveIntensity: 0.5
          });
        } else if (renderMode === "vertices") {
          child.material = new THREE.PointsMaterial({ color: themeColor, size: 0.05 });
        } else {
          // Solid Mode - Restore original materials to show full textures (wheels, paint, decals)
          const originalMat = originalMaterials.current.get(child.uuid);
          if (originalMat) {
            child.material = originalMat;
          } else {
            child.material = new THREE.MeshStandardMaterial({
              color: themeColor,
              roughness: 0.3,
              metalness: 0.7
            });
          }
        }
      }
    });
  }, [scene, renderMode, themeColor]);

  if (renderMode === "vertices") {
    const points: React.ReactNode[] = [];
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        points.push(
          <points key={child.uuid} geometry={child.geometry}>
            <pointsMaterial color={themeColor} size={0.04} sizeAttenuation />
          </points>
        );
      }
    });
    return <group>{points}</group>;
  }

  return <primitive object={scene} scale={1.2} />;
}

// 2. Default Primitives (Car, Sword, Hub) rendered in WebGL
function PrimitiveModel({ 
  modelType, 
  renderMode, 
  themeColor 
}: { 
  modelType: "car" | "sword" | "hub"; 
  renderMode: "wireframe" | "vertices" | "solid" | "xray";
  themeColor: string;
}) {
  const getMaterialProps = () => {
    if (renderMode === "wireframe") {
      return { wireframe: true, color: themeColor };
    }
    if (renderMode === "xray") {
      return {
        color: "#06b6d4",
        transparent: true,
        opacity: 0.35,
        roughness: 0.1,
        metalness: 0.9,
        emissive: new THREE.Color("#06b6d4"),
        emissiveIntensity: 0.5
      };
    }
    // Solid
    return {
      color: themeColor,
      roughness: 0.2,
      metalness: 0.8
    };
  };

  const matProps = getMaterialProps();

  const wrapGeometry = (geom: React.ReactNode) => {
    if (renderMode === "vertices") {
      return (
        <points>
          {geom}
          <pointsMaterial color={themeColor} size={0.06} sizeAttenuation />
        </points>
      );
    }
    return (
      <mesh>
        {geom}
        <meshStandardMaterial {...matProps} />
      </mesh>
    );
  };

  if (modelType === "car") {
    return (
      <group>
        {/* Chassis */}
        {wrapGeometry(<boxGeometry args={[2.2, 0.25, 1.1]} />)}
        {/* Cabin */}
        <group position={[0, 0.28, 0]}>
          {renderMode === "vertices" ? (
            wrapGeometry(<boxGeometry args={[1.1, 0.35, 0.9]} />)
          ) : (
            <mesh>
              <boxGeometry args={[1.1, 0.35, 0.9]} />
              <meshStandardMaterial 
                color={renderMode === "xray" ? "#06b6d4" : "#38bdf8"} 
                transparent 
                opacity={renderMode === "xray" ? 0.35 : 0.6} 
                roughness={0.1}
                metalness={0.9}
              />
            </mesh>
          )}
        </group>
        {/* Spoiler */}
        <group position={[-0.9, 0.25, 0]}>
          {wrapGeometry(<boxGeometry args={[0.15, 0.05, 1.1]} />)}
          {wrapGeometry(<boxGeometry args={[0.05, 0.15, 0.05]} />)}
        </group>
        {/* Wheels */}
        {renderMode === "vertices" ? (
          <>
            {wrapGeometry(<cylinderGeometry args={[0.28, 0.28, 0.18, 12]} />)}
          </>
        ) : (
          [
            [0.8, -0.1, 0.6],   // FL
            [0.8, -0.1, -0.6],  // FR
            [-0.7, -0.1, 0.6],  // RL
            [-0.7, -0.1, -0.6]  // RR
          ].map((pos, i) => (
            <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.28, 0.28, 0.18, 16]} />
              <meshStandardMaterial color="#1e293b" roughness={0.8} metalness={0.2} wireframe={renderMode === "wireframe"} />
            </mesh>
          ))
        )}
        {/* Headlights */}
        {renderMode !== "vertices" && renderMode !== "wireframe" && (
          <group position={[1.1, 0, 0]}>
            <mesh position={[0, 0, 0.35]}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshBasicMaterial color="#38bdf8" toneMapped={false} />
            </mesh>
            <mesh position={[0, 0, -0.35]}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshBasicMaterial color="#38bdf8" toneMapped={false} />
            </mesh>
          </group>
        )}
      </group>
    );
  }

  if (modelType === "sword") {
    return (
      <group position={[0, -0.5, 0]}>
        {/* Blade */}
        <group position={[0, 1.1, 0]}>
          {wrapGeometry(<boxGeometry args={[0.15, 1.6, 0.03]} />)}
        </group>
        {/* Guard */}
        <group position={[0, 0.25, 0]}>
          {wrapGeometry(<boxGeometry args={[0.7, 0.08, 0.12]} />)}
        </group>
        {/* Grip */}
        <group position={[0, -0.1, 0]}>
          {wrapGeometry(<cylinderGeometry args={[0.05, 0.05, 0.6, 8]} />)}
        </group>
        {/* Pommel */}
        <group position={[0, -0.45, 0]}>
          {wrapGeometry(<sphereGeometry args={[0.07, 8, 8]} />)}
        </group>
      </group>
    );
  }

  return (
    <group>
      {/* Central Node */}
      {wrapGeometry(<boxGeometry args={[0.7, 0.7, 0.7]} />)}
      {/* Satellites */}
      {[
        [1.3, 0, 0],
        [-1.3, 0, 0],
        [0, 1.3, 0],
        [0, -1.3, 0],
        [0, 0, 1.3],
        [0, 0, -1.3]
      ].map((pos, i) => (
        <group key={i}>
          <group position={pos as [number, number, number]}>
            {wrapGeometry(<sphereGeometry args={[0.14, 12, 12]} />)}
          </group>
          {renderMode !== "vertices" && (
            <mesh position={[pos[0]/2, pos[1]/2, pos[2]/2]} rotation={
              pos[0] !== 0 ? [0, 0, Math.PI / 2] : pos[2] !== 0 ? [Math.PI / 2, 0, 0] : [0, 0, 0]
            }>
              <cylinderGeometry args={[0.02, 0.02, 1.3]} />
              <meshStandardMaterial color={themeColor} roughness={0.5} wireframe={renderMode === "wireframe"} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}

// 3. R3F Scene Viewer Component
function SceneViewer({
  modelType,
  renderMode,
  themeColor,
  isRotating,
  rotationSpeed,
  showGrid,
  hasGtaModel,
  showCustomModel,
  modelPath
}: {
  modelType: "car" | "sword" | "hub";
  renderMode: "wireframe" | "vertices" | "solid" | "xray";
  themeColor: string;
  isRotating: boolean;
  rotationSpeed: number;
  showGrid: boolean;
  hasGtaModel: boolean;
  showCustomModel: boolean;
  modelPath: string;
}) {
  const modelGroupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (isRotating && modelGroupRef.current) {
      modelGroupRef.current.rotation.y += 0.008 * rotationSpeed;
    }
  });

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} />
      <pointLight position={[-5, 5, -5]} intensity={0.3} />
      <pointLight position={[0, 0, 0]} color={themeColor} intensity={0.9} distance={4} />

      <group ref={modelGroupRef}>
        {hasGtaModel && showCustomModel ? (
          <ViewportErrorBoundary fallback={<PrimitiveModel modelType={modelType} renderMode={renderMode} themeColor={themeColor} />}>
            <Suspense fallback={<PrimitiveModel modelType={modelType} renderMode={renderMode} themeColor={themeColor} />}>
              <GtaModel url={modelPath} renderMode={renderMode} themeColor={themeColor} />
            </Suspense>
          </ViewportErrorBoundary>
        ) : (
          <PrimitiveModel modelType={modelType} renderMode={renderMode} themeColor={themeColor} />
        )}
      </group>

      {showGrid && (
        <gridHelper 
          args={[8, 16, "#3b82c4", "rgba(255,255,255,0.06)"]} 
          position={[0, -0.9, 0]} 
        />
      )}
    </>
  );
}

// 4. Main Exported Viewport Component
export default function InteractiveCanvas3D({ 
  value, 
  onChange 
}: { 
  value?: "car" | "sword" | "hub"; 
  onChange?: (val: "car" | "sword" | "hub") => void; 
}) {
  const [internalModelType, setInternalModelType] = useState<"car" | "sword" | "hub">("car");
  const modelType = value !== undefined ? value : internalModelType;
  const setModelType = (val: "car" | "sword" | "hub") => {
    if (onChange) {
      onChange(val);
    } else {
      setInternalModelType(val);
    }
  };

  const [renderMode, setRenderMode] = useState<"wireframe" | "vertices" | "solid" | "xray">("solid");
  const [themeColor, setThemeColor] = useState("#ffffff");
  const [isRotating, setIsRotating] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(1.0);
  const [showGrid, setShowGrid] = useState(true);
  const [hasGtaModel, setHasGtaModel] = useState(false);
  const [showCustomModel, setShowCustomModel] = useState(false);
  const initialGt86Path = `${import.meta.env.BASE_URL}assets/models/gt86.glb`;
  const [modelPath, setModelPath] = useState(initialGt86Path);
 
  useEffect(() => {
    const candidatePaths = [
      `${import.meta.env.BASE_URL}assets/models/gt86.glb`,
      "assets/models/gt86.glb",
      `${import.meta.env.BASE_URL}assets/models/custom_car.glb`,
      "assets/models/custom_car.glb",
      `${import.meta.env.BASE_URL}assets/models/gta_model.glb`,
      "assets/models/gta_model.glb"
    ];

    let found = false;
    const checkPath = async () => {
      for (const path of candidatePaths) {
        try {
          const res = await fetch(path, { method: "HEAD" });
          const contentType = res.headers.get("content-type");
          if (res.ok && contentType && !contentType.includes("text/html")) {
            setHasGtaModel(true);
            setShowCustomModel(true);
            setModelPath(path);
            found = true;
            break;
          }
        } catch (e) {
          // ignore & continue to next candidate
        }
      }
      if (!found) {
        // Fallback check: if on localhost or relative path, directly set gt86.glb
        setHasGtaModel(true);
        setShowCustomModel(true);
        setModelPath(initialGt86Path);
      }
    };

    checkPath();
  }, [initialGt86Path]);

  const getModelName = () => {
    return modelPath.substring(modelPath.lastIndexOf("/") + 1).toUpperCase();
  };

  return (
    <div className="w-full bg-zinc-950/80 border border-zinc-800 rounded-[32px] p-6 backdrop-blur-2xl shadow-xl shadow-black/80 relative overflow-hidden flex flex-col md:flex-row gap-6 text-zinc-200">
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* R3F Canvas Viewport */}
      <div className="flex-1 min-h-[320px] md:min-h-[400px] h-[400px] bg-black border border-zinc-800 rounded-2xl relative select-none overflow-hidden">
        
        {/* OSD Overlay Info */}
        <div className="absolute top-4 left-4 font-mono text-[10px] tracking-tight text-zinc-400 bg-zinc-950/90 backdrop-blur-md py-2.5 px-3.5 rounded-xl border border-zinc-800 flex flex-col gap-1 z-10 select-none pointer-events-none">
          <div className="text-white font-bold flex items-center gap-1.5">
            <Box className="w-3.5 h-3.5 text-white rotate-12" />
            RAFFI3D VIEWPORT v2.1
          </div>
          <div className="w-16 h-[1px] bg-zinc-800 my-1" />
          <div>MODEL: {hasGtaModel && showCustomModel ? getModelName() : modelType.toUpperCase()}</div>
          <div>MODE: {renderMode.toUpperCase()}</div>
          <div>API: WEBGL 2.0 (Three.js)</div>
          <div>SOURCE: {hasGtaModel && showCustomModel ? modelPath : "R3F PRIMITIVES"}</div>
          <div className="flex items-center gap-1.5 mt-1 text-emerald-400 font-bold">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
            <span>GPU_RENDER_OK</span>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 text-[10px] text-zinc-400 font-mono bg-zinc-950/80 backdrop-blur px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 select-none pointer-events-none border border-zinc-800 z-10 font-bold">
          <Info className="w-3.5 h-3.5 text-white" />
          Drag to Orbit | Scroll to Zoom
        </div>

        <Canvas 
          camera={{ position: [0, 1.2, 3.2], fov: 45 }}
          {...({ style: { width: "100%", height: "100%", display: "block" } } as any)}
        >
          <SceneViewer
            modelType={modelType}
            renderMode={renderMode}
            themeColor={themeColor}
            isRotating={isRotating}
            rotationSpeed={rotationSpeed}
            showGrid={showGrid}
            hasGtaModel={hasGtaModel}
            showCustomModel={showCustomModel}
            modelPath={modelPath}
          />
          <OrbitControls 
            enableZoom={true} 
            maxPolarAngle={Math.PI / 1.9}
            minDistance={1.2}
            maxDistance={8}
            makeDefault 
          />
        </Canvas>
      </div>

      {/* Control panel */}
      <div className="w-full md:w-64 flex flex-col justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sliders className="w-5 h-5 text-white animate-pulse" />
            <h3 className="text-sm font-bold tracking-widest text-white uppercase">
              3D VIEWPORT CONTROLS
            </h3>
          </div>

          <div className="mb-4">
            <label className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block mb-1.5 font-bold">
              Pilih Aset 3D
            </label>
            <div className="grid grid-cols-2 gap-2">
              {hasGtaModel && (
                <button
                  id="btn-mod-custom"
                  onClick={() => setShowCustomModel(true)}
                  className={`col-span-2 py-2.5 px-2 text-center rounded-xl text-xs font-extrabold tracking-wide transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer ${
                    showCustomModel
                      ? "bg-white text-black font-bold border-none"
                      : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  🚘 {getModelName()} (Kustom)
                </button>
              )}
              <button
                id="btn-mod-car"
                onClick={() => {
                  setShowCustomModel(false);
                  setModelType("car");
                }}
                className={`py-2.5 px-1 text-center rounded-xl text-xs font-extrabold tracking-wide transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer ${
                  !showCustomModel && modelType === "car"
                    ? "bg-white text-black font-bold border-none"
                    : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                Mobil
              </button>
              <button
                id="btn-mod-sword"
                onClick={() => {
                  setShowCustomModel(false);
                  setModelType("sword");
                }}
                className={`py-2.5 px-1 text-center rounded-xl text-xs font-extrabold tracking-wide transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer ${
                  !showCustomModel && modelType === "sword"
                    ? "bg-white text-black font-bold border-none"
                    : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                Pedang
              </button>
              <button
                id="btn-mod-hub"
                onClick={() => {
                  setShowCustomModel(false);
                  setModelType("hub");
                }}
                className={`col-span-2 py-2.5 px-1 text-center rounded-xl text-xs font-extrabold tracking-wide transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer ${
                  !showCustomModel && modelType === "hub"
                    ? "bg-white text-black font-bold border-none"
                    : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                CMS Hub
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block mb-1.5 font-bold">
              Viewport Shader
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Shaded Mode", val: "solid" },
                { name: "Wireframe", val: "wireframe" },
                { name: "Cloud Vertices", val: "vertices" },
                { name: "X-Ray", val: "xray" }
              ].map(opt => (
                <button
                  key={opt.val}
                  id={`btn-shader-${opt.val}`}
                  onClick={() => setRenderMode(opt.val as any)}
                  className={`py-2 px-3 text-left rounded-xl text-[10px] uppercase font-extrabold tracking-wide transition-all duration-300 flex items-center justify-between cursor-pointer hover:scale-102 active:scale-98 ${
                    renderMode === opt.val
                      ? "bg-white text-black font-bold border border-white"
                      : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  <span>{opt.name}</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${renderMode === opt.val ? "bg-black animate-pulse" : "bg-transparent border border-zinc-500"}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <label className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 font-bold">
                Orbit Auto-Rotation
              </label>
              <button
                id="btn-toggle-rotation"
                onClick={() => setIsRotating(!isRotating)}
                className={`text-[10px] px-2.5 py-1 rounded-lg font-mono transition-all font-bold cursor-pointer ${
                  isRotating
                    ? "text-white bg-zinc-800 border border-zinc-700"
                    : "text-zinc-400 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {isRotating ? "ON" : "OFF"}
              </button>
            </div>
            {isRotating && (
              <div className="space-y-1 mt-1.5">
                <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono font-bold">
                  <span>Speed multiplier</span>
                  <span>{rotationSpeed.toFixed(1)}x</span>
                </div>
                <input
                  id="input-rotation-speed"
                  type="range"
                  min="0.2"
                  max="4.0"
                  step="0.2"
                  value={rotationSpeed}
                  onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                  className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-zinc-800 pt-3">
            <span className="text-xs text-zinc-300 font-bold">Floor Reference Grid</span>
            <button
              id="btn-toggle-grid"
              onClick={() => setShowGrid(!showGrid)}
              className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-200 outline-none cursor-pointer ${
                showGrid ? "bg-white" : "bg-zinc-900 border border-zinc-800"
              }`}
            >
              <div className={`w-4 h-4 rounded-full shadow-md transform duration-200 ease-out ${
                showGrid ? "translate-x-5 bg-black" : "translate-x-0 bg-white"
              }`} />
            </button>
          </div>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-3.5 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-white select-none tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5 text-white animate-spin" style={{ animationDuration: "12s" }} />
            RAFFI ARYA INTERACTION
          </div>
          <p className="text-[10px] text-zinc-400 leading-relaxed font-sans font-medium">
            "WebGL 3D Viewport ini menggunakan Three.js untuk merender objek model 3D kustom Anda secara real-time."
          </p>
        </div>
      </div>
    </div>
  );
}
