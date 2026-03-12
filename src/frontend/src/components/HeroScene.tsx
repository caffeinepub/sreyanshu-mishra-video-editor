import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type * as THREE from "three";

function GoldenFrame({
  position,
  rotation,
  scale,
  speed,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * speed * 0.3;
    meshRef.current.rotation.y += delta * speed * 0.5;
    meshRef.current.rotation.z += delta * speed * 0.15;
  });
  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[1, 0.65, 0.04]} />
      <meshStandardMaterial
        color="#c9a84c"
        metalness={1}
        roughness={0.2}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}

function GoldenFrameWireframe({
  position,
  rotation,
  scale,
  speed,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * speed * 0.2;
    meshRef.current.rotation.y += delta * speed * 0.4;
  });
  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[1, 0.65, 0.04]} />
      <meshStandardMaterial
        color="#e8c547"
        metalness={0.9}
        roughness={0.3}
        wireframe
      />
    </mesh>
  );
}

function Particles() {
  const count = 180;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#d4a843"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

function CameraRig() {
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.1) * 1.5;
    camera.position.y = Math.cos(t * 0.08) * 0.8;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

const frames = [
  {
    id: "f1",
    position: [-4, 2, -3] as [number, number, number],
    rotation: [0.3, 0.5, 0.1] as [number, number, number],
    scale: [2.5, 2.5, 2.5] as [number, number, number],
    speed: 0.4,
  },
  {
    id: "f2",
    position: [4, -1, -5] as [number, number, number],
    rotation: [0.1, 0.8, 0.2] as [number, number, number],
    scale: [3, 3, 3] as [number, number, number],
    speed: 0.3,
  },
  {
    id: "f3",
    position: [-2, -2.5, -4] as [number, number, number],
    rotation: [0.6, 0.2, 0.4] as [number, number, number],
    scale: [2, 2, 2] as [number, number, number],
    speed: 0.6,
  },
  {
    id: "f4",
    position: [5, 2.5, -6] as [number, number, number],
    rotation: [0.2, 1.2, 0.1] as [number, number, number],
    scale: [3.5, 3.5, 3.5] as [number, number, number],
    speed: 0.25,
  },
  {
    id: "f5",
    position: [0, 3.5, -7] as [number, number, number],
    rotation: [0.9, 0.4, 0.7] as [number, number, number],
    scale: [2.8, 2.8, 2.8] as [number, number, number],
    speed: 0.35,
  },
  {
    id: "f6",
    position: [-5, 0, -8] as [number, number, number],
    rotation: [0.4, 1.5, 0.3] as [number, number, number],
    scale: [4, 4, 4] as [number, number, number],
    speed: 0.2,
  },
  {
    id: "f7",
    position: [3, -3, -3] as [number, number, number],
    rotation: [1.0, 0.3, 0.8] as [number, number, number],
    scale: [1.8, 1.8, 1.8] as [number, number, number],
    speed: 0.7,
  },
  {
    id: "f8",
    position: [-3, 1.5, -6] as [number, number, number],
    rotation: [0.5, 0.9, 0.2] as [number, number, number],
    scale: [2.2, 2.2, 2.2] as [number, number, number],
    speed: 0.45,
  },
];

const wireframesData = [
  {
    id: "w1",
    position: [2, 1, -4] as [number, number, number],
    rotation: [0.7, 0.3, 0.5] as [number, number, number],
    scale: [2.0, 2.0, 2.0] as [number, number, number],
    speed: 0.5,
  },
  {
    id: "w2",
    position: [-1, -3, -5] as [number, number, number],
    rotation: [0.2, 1.1, 0.4] as [number, number, number],
    scale: [3.2, 3.2, 3.2] as [number, number, number],
    speed: 0.28,
  },
  {
    id: "w3",
    position: [6, 0, -7] as [number, number, number],
    rotation: [0.8, 0.6, 0.9] as [number, number, number],
    scale: [2.6, 2.6, 2.6] as [number, number, number],
    speed: 0.4,
  },
  {
    id: "w4",
    position: [-4, 3, -9] as [number, number, number],
    rotation: [0.3, 1.4, 0.2] as [number, number, number],
    scale: [3.8, 3.8, 3.8] as [number, number, number],
    speed: 0.22,
  },
  {
    id: "w5",
    position: [1, -1, -2] as [number, number, number],
    rotation: [0.5, 0.7, 0.6] as [number, number, number],
    scale: [1.5, 1.5, 1.5] as [number, number, number],
    speed: 0.6,
  },
];

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#f5d080" />
      <directionalLight
        position={[-5, -2, -3]}
        intensity={0.6}
        color="#c9932a"
      />
      <pointLight position={[0, 0, 4]} intensity={0.8} color="#ffd060" />

      {frames.map((f) => (
        <Float
          key={f.id}
          speed={1.2}
          rotationIntensity={0.3}
          floatIntensity={0.8}
        >
          <GoldenFrame
            position={f.position}
            rotation={f.rotation}
            scale={f.scale}
            speed={f.speed}
          />
        </Float>
      ))}

      {wireframesData.map((f) => (
        <Float
          key={f.id}
          speed={0.9}
          rotationIntensity={0.2}
          floatIntensity={0.6}
        >
          <GoldenFrameWireframe
            position={f.position}
            rotation={f.rotation}
            scale={f.scale}
            speed={f.speed}
          />
        </Float>
      ))}

      <Particles />
      <CameraRig />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
      className="absolute inset-0 w-full h-full"
    >
      <Scene />
    </Canvas>
  );
}
