import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const ZenStone = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Detail level 2 instead of 4 — ~4x fewer vertices, much cheaper
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.4, 2);
    const positions = geo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);
      const offset = 0.15 * Math.sin(x * 2) * Math.cos(y * 2) * Math.sin(z * 2);
      positions.setXYZ(i, x + offset * x * 0.3, y + offset * y * 0.3, z + offset * z * 0.3);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    // Smooth mouse follow
    const pointer = state.pointer;
    mouseRef.current.x += (pointer.x * 0.3 - mouseRef.current.x) * 0.02;
    mouseRef.current.y += (pointer.y * 0.3 - mouseRef.current.y) * 0.02;

    meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.1 + mouseRef.current.y;
    meshRef.current.rotation.y = t * 0.08 + mouseRef.current.x;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} geometry={geometry} scale={1}>
        {/* Replaced MeshTransmissionMaterial (very expensive) with
            MeshPhysicalMaterial — looks similar, runs far more cheaply */}
        <meshPhysicalMaterial
          color="#78350f"
          roughness={0.08}
          metalness={0.1}
          transmission={0.88}
          thickness={1.2}
          ior={1.45}
          transparent
          opacity={0.92}
          envMapIntensity={0.6}
        />
      </mesh>
    </Float>
  );
};

const ZenStoneScene = () => (
  <div className="w-full h-[400px] md:h-[500px]">
    <Canvas
      camera={{ position: [0, 0, 5], fov: 40 }}
      dpr={[1, 1]}                              // cap at 1x — no high-DPI overdraw
      gl={{ antialias: false, alpha: true }}    // antialias off saves fill-rate
      frameloop="always"
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <directionalLight position={[-3, 2, -3]} intensity={0.3} color="#fcd34d" />
      <ZenStone />
      {/* Removed Environment preset — was loading a full HDR, not needed */}
    </Canvas>
  </div>
);

export default ZenStoneScene;
