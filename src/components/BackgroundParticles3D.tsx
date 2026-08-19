import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingPoints() {
  const networkRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const count = 540;

  // Stable procedural star map: foreground, mid-field, and deep-field points.
  const [positions, linePositions, beaconPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const layer = i % 3;
      const spread = layer === 0 ? 11 : layer === 1 ? 15 : 20;
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.7;
      pos[i * 3 + 2] = -2.5 + Math.random() * 9;
    }

    // Use local neighbor searches to keep the constellation structure detailed but performant.
    const lines: number[] = [];
    for (let i = 0; i < count; i++) {
      let connections = 0;
      for (let j = i + 1; j < count && connections < 3; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        if (dx * dx + dy * dy + dz * dz < 3.6) {
          lines.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
          lines.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
          connections++;
        }
      }
    }

    const beacons = new Float32Array([
      -4.5, 2.2, 0.4, 4.8, 1.6, 0.8, -3.2, -2.7, 1.3,
      3.8, -2.4, -0.4, 0.2, 3.5, 0.2, 0.5, -3.7, 0.5
    ]);
    return [pos, new Float32Array(lines), beacons];
  }, []);

  useFrame((state, delta) => {
    const pointerX = state.pointer.x * 0.16;
    const pointerY = state.pointer.y * 0.12;
    if (networkRef.current) {
      networkRef.current.rotation.y += delta * 0.018;
      networkRef.current.rotation.x += (pointerY - networkRef.current.rotation.x) * 0.015;
      networkRef.current.rotation.y += (pointerX - networkRef.current.rotation.y) * 0.006;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.z -= delta * 0.05;
      orbitRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.16;
    }
  });

  return (
    <group>
      <group ref={networkRef}>
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          </bufferGeometry>
          <pointsMaterial color="#ffffff" size={0.055} sizeAttenuation transparent opacity={0.92} depthWrite={false} />
        </points>

        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color="#ffffff" transparent opacity={0.18} depthWrite={false} />
        </lineSegments>

        {Array.from({ length: 18 }).map((_, index) => {
          const x = beaconPositions[index * 3];
          const y = beaconPositions[index * 3 + 1];
          const z = beaconPositions[index * 3 + 2];
          return (
            <mesh key={index} position={[x, y, z]} rotation={[index, index * 0.6, 0]}>
              <octahedronGeometry args={[index % 3 === 0 ? 0.12 : 0.06, 0]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={index % 3 === 0 ? 0.9 : 0.5} wireframe={index % 2 === 0} />
            </mesh>
          );
        })}
      </group>

      <group ref={orbitRef} position={[0, 0, -1]}>
        <mesh rotation={[Math.PI / 2.7, 0.25, 0]}>
          <torusGeometry args={[5.8, 0.012, 5, 160]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.28} />
        </mesh>
        <mesh rotation={[Math.PI / 1.85, -0.45, 0.4]}>
          <torusGeometry args={[4.1, 0.009, 4, 120]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
        </mesh>
        <mesh rotation={[0.75, 0.4, -0.3]}>
          <icosahedronGeometry args={[2.1, 2]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.08} wireframe />
        </mesh>
      </group>
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

