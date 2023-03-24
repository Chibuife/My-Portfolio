import React, { Suspense, useEffect, useState } from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { Canvas, events } from '@react-three/fiber'
const Computers = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:750px)')
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change',
      handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  console.log(isMobile)
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight position={[-20,50,10]}
      angle={0.12}
      prenumber={1}
      intensity={ 1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive object={computer.scene} scale={isMobile ? 0.5 : 0.75} rotation={[-0.01, -0.2, -0.15]} position={isMobile ? [0, -4, -1.2]:[0,-4.25,-1.5]} />
    </mesh>
  )
}

const ComputersCanvavs = () => {
  
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ presereDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
        <Preload all/>
      </Suspense>
    </Canvas>
  )
}
export default ComputersCanvavs