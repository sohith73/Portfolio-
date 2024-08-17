// import React from 'react'
// import { useGLTF } from '@react-three/drei'

// export function Globe(props) {
//   const { nodes, materials } = useGLTF('/globe.gltf')
//   return (
//     <group {...props} dispose={null}>
//       <group rotation={[-Math.PI / 1.987, 0, 0]} scale={2.567}>
//         <mesh geometry={nodes.Object_2.geometry} material={materials.matairport_material} />
//         <mesh geometry={nodes.Object_3.geometry} material={materials.matairport_material} />
//         <mesh geometry={nodes.Object_4.geometry} material={materials.matsurface_material} />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/globe.gltf')

// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';

// export function Globe(props) {
//   const groupRef = useRef();
//   const { nodes, materials } = useGLTF('/globe.gltf');

//   // Rotate the globe in each frame
//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += 0.005;  // Adjust the rotation speed here
//     }
//   });

//   return (
//     <group ref={groupRef} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 1.987, 0, 0]} scale={2.567}>
//         <mesh geometry={nodes.Object_2.geometry} material={materials.matairport_material} />
//         <mesh geometry={nodes.Object_3.geometry} material={materials.matairport_material} />
//         <mesh geometry={nodes.Object_4.geometry} material={materials.matsurface_material} />
//       </group>
//     </group>
//   );
// }

// useGLTF.preload('/globe.gltf');

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Globe(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/globe.gltf');

  // Rotate the globe in each frame
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;  // Adjust speed here
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 1.987, 0, 0]} scale={2.567}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.matairport_material} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.matairport_material} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.matsurface_material} />
      </group>
    </group>
  );
}

useGLTF.preload('/globe.gltf');
