import { useRef, Suspense } from 'react';
import { useGLTF, OrbitControls, Html, useProgress } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)} % loaded</Html>;
}

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

      <Suspense fallback={<Loader />}>
        <Scene scale={3} position={[0, 0, 0]} />
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  )
}

// Preload model so it's cached and avoids flicker on revisit
useGLTF.preload("/stylized_planet.glb");