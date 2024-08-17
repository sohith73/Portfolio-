import React from 'react'
import { Canvas } from '@react-three/fiber'
import Box from '../components/Box'
import { OrbitControls } from '@react-three/drei'
import Sphere from '../components/Animated'

const TestOP = () => {
     return (
          <div className='text-orange-50 z-50 w-full h-full '>
               <Canvas className='bg-red-800'>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.2} />
                    <directionalLight intensity={1} position={[-2,5,2]} />
                    <Box />
               </Canvas>
               <Canvas className='bg-red-800 h-20'>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.2} />
                    <directionalLight intensity={1} position={[-2,5,2]} />
                    <Sphere />
               </Canvas>
          </div>
     )
}

export default TestOP