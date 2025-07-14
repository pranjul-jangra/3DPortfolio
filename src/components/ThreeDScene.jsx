import { useRef } from 'react';
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


function Scene(props) {
  const ref = useRef();
  const { scene } = useGLTF("/stylized_planet.glb");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x -= 0.001;
      ref.current.rotation.y += 0.003;
      ref.current.rotation.z = 0
    }
  });

  return <primitive ref={ref} object={scene} {...props} />
}


export default function ThreeDScene() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <Scene scale={3} position={[0, 0, 0]} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  )
}