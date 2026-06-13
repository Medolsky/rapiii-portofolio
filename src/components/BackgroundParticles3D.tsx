import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingPoints() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 120; // Perfect count for nice visuals with zero lag

  // Generate random stable coordinates
  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;     // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8; // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6; // Z
    }
    return [pos];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    // Slow rotational drift combined with smooth mouse tracking
    const targetX = state.pointer.y * 0.15;
    const targetY = state.pointer.x * 0.15;
    
    pointsRef.current.rotation.y += delta * 0.01 + (targetY - pointsRef.current.rotation.y) * 0.05;
    pointsRef.current.rotation.x += delta * 0.005 + (targetX - pointsRef.current.rotation.x) * 0.05;

    // Subtle breathing animation on vertex points
    const posAttr = pointsRef.current.geometry.attributes.position;
    const array = posAttr.array as Float32Array;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < count; i++) {
      // Gently move height (Y axis) based on trigonometric wave offsets
      array[i * 3 + 1] += Math.sin(time * 0.15 + i) * 0.0006;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#7c3aed" // Rich purple/violet color
        size={0.04}
        sizeAttenuation
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </points>
  );
}

export default function BackgroundParticles3D() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 select-none">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 60 }}
        gl={{ 
          alpha: true, 
          antialias: false, 
          powerPreference: "low-power",
          preserveDrawingBuffer: false
        }}
      >
        <FloatingPoints />
      </Canvas>
    </div>
  );
}
