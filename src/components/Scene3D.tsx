
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[2, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#DC2626"
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[-2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.8}
          roughness={0.2}
          emissive="#DC2626"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
};

const AnimatedTorus = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={3}>
      <mesh ref={meshRef} position={[0, 1.5, 0]}>
        <torusGeometry args={[0.6, 0.2, 16, 32]} />
        <meshStandardMaterial
          color="#EF4444"
          metalness={0.9}
          roughness={0.1}
          emissive="#DC2626"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#DC2626" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        
        <AnimatedSphere />
        <AnimatedBox />
        <AnimatedTorus />
      </Canvas>
    </div>
  );
};

export default Scene3D;
