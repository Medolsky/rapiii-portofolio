import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingPoints() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const count = 320;

  // Generate 3D coordinates for points and constellation lines
  const [positions, linePositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;     // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12; // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;  // Z
    }

    // Connect close points with subtle 3D lines
    const lineCoords: number[] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.6) {
          lineCoords.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
          lineCoords.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
        }
      }
    }

    return [pos, new Float32Array(lineCoords)];
  }, []);

  useFrame((state, delta) => {
    const targetX = state.pointer.y * 0.12;
    const targetY = state.pointer.x * 0.12;

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.015 + (targetY - pointsRef.current.rotation.y) * 0.04;
      pointsRef.current.rotation.x += delta * 0.008 + (targetX - pointsRef.current.rotation.x) * 0.04;

      const posAttr = pointsRef.current.geometry.attributes.position;
      const array = posAttr.array as Float32Array;
      const time = state.clock.elapsedTime;

      for (let i = 0; i < count; i++) {
        array[i * 3 + 1] += Math.sin(time * 0.2 + i) * 0.0005;
      }
      posAttr.needsUpdate = true;
    }

    if (linesRef.current && pointsRef.current) {
      linesRef.current.rotation.x = pointsRef.current.rotation.x;
      linesRef.current.rotation.y = pointsRef.current.rotation.y;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#ffffff"
          size={0.035}
          sizeAttenuation
          transparent
          opacity={0.65}
          depthWrite={false}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.07}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export default function BackgroundParticles3D() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 select-none bg-black">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 60 }}
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

