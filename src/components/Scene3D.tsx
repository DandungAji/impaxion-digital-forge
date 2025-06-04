
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Float, MeshDistortMaterial } from '@react-three/drei';
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
      <Sphere ref={meshRef} args={[1, 64, 64]} position={[2, 0, 0]}>
        <MeshDistortMaterial
          color="#DC2626"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
        />
      </Sphere>
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
      <Box ref={meshRef} args={[1, 1, 1]} position={[-2, 0, 0]}>
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.8}
          roughness={0.2}
          emissive="#DC2626"
          emissiveIntensity={0.1}
        />
      </Box>
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
      <Torus ref={meshRef} args={[0.6, 0.2, 16, 32]} position={[0, 1.5, 0]}>
        <meshStandardMaterial
          color="#EF4444"
          metalness={0.9}
          roughness={0.1}
          emissive="#DC2626"
          emissiveIntensity={0.2}
        />
      </Torus>
    </Float>
  );
};

const Scene3D: React.FC = () => {
  const ambientLightIntensity = 0.3;
  const pointLightIntensity = 1;

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        className="w-full h-full"
      >
        <ambientLight intensity={ambientLightIntensity} />
        <pointLight position={[10, 10, 10]} intensity={pointLightIntensity} color="#DC2626" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        
        <AnimatedSphere />
        <AnimatedBox />
        <AnimatedTorus />
      </Canvas>
    </div>
  );
};

export default Scene3D;
