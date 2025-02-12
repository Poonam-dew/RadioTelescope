import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const Starfield = () => {
  const pointsRef = useRef();

  // Move the stars over time to create motion
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0005;
      pointsRef.current.rotation.y += 0.0005;
    }
  });

  // Generate Random Star Positions
  const starVertices = new Float32Array(5000 * 3).map(() => (Math.random() - 0.5) * 10);

  return (
    <group>
      <Points ref={pointsRef} scale={[5, 5, 5]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={starVertices} count={starVertices.length / 3} itemSize={3} />
        </bufferGeometry>
        <PointMaterial size={0.02} color="#ffffff" />
      </Points>
    </group>
  );
};

const Star = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Starfield />
    </Canvas>
  );
};

export default Star;
