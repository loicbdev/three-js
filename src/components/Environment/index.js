import React from "react";
import { BackSide } from "three";

const Environment = () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[5, 10, 10]} attach="geometry" />
      <meshStandardMaterial
        color={0xd2452b}
        attach="material"
        side={BackSide}
        metalness={0.8}
      />
    </mesh>
  );
};

export default Environment;
