import React from "react";
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

export default function Box(){
     extend({ BoxGeometry: THREE.BoxGeometry });
     return (<mesh rotation={[90,0,20]}>
          <boxGeometry  attach="geometry" args={[3,3,3]} />
          {/* <boxBufferGeometry */}
          {/* <meshStandardMaterial color={'orange'} /> */}
          <meshLambertMaterial attach="material" color="blue" />
     </mesh>)
}