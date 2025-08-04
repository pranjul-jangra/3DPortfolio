import { useRef, useMemo } from 'react'
import useThemeStyles from '../hooks/useThemeStyles'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Individual particle system component
function ParticleSystem() {
    const meshRef = useRef()
    const { particleCount, particleColor } = useThemeStyles();

    // Generate random positions and velocities
    const [positions, velocities] = useMemo(() => {
        const positions = new Float32Array(particleCount * 3)
        const velocities = new Float32Array(particleCount * 3)

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3

            // Random positions in a large sphere
            positions[i3] = (Math.random() - 0.5) * 20
            positions[i3 + 1] = (Math.random() - 0.5) * 20
            positions[i3 + 2] = (Math.random() - 0.5) * 20

            // Random slow velocities
            velocities[i3] = (Math.random() - 0.5) * 0.005
            velocities[i3 + 1] = (Math.random() - 0.5) * 0.005
            velocities[i3 + 2] = (Math.random() - 0.5) * 0.005
        }

        return [positions, velocities]
    }, [particleCount])

    // Animation loop
    useFrame((state, delta) => {
        if (meshRef.current) {
            const positions = meshRef.current.geometry.attributes.position.array

            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3

                // Update positions based on velocities
                positions[i3] += velocities[i3] * delta * 60
                positions[i3 + 1] += velocities[i3 + 1] * delta * 60
                positions[i3 + 2] += velocities[i3 + 2] * delta * 60

                // Wrap around boundaries
                if (positions[i3] > 10) positions[i3] = -10
                if (positions[i3] < -10) positions[i3] = 10
                if (positions[i3 + 1] > 10) positions[i3 + 1] = -10
                if (positions[i3 + 1] < -10) positions[i3 + 1] = 10
                if (positions[i3 + 2] > 10) positions[i3 + 2] = -10
                if (positions[i3 + 2] < -10) positions[i3 + 2] = 10
            }

            meshRef.current.geometry.attributes.position.needsUpdate = true
        }
    })

    return (
        <Points ref={meshRef} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color={particleColor}
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    )
}

// Camera controller for slight movement
function CameraController() {
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        state.camera.position.x = Math.sin(t * 0.1) * 0.5
        state.camera.position.y = Math.cos(t * 0.15) * 0.3
        state.camera.lookAt(0, 0, 0)
    })
    return null
}

// Main component
export default function ParticleBackground() {
    return (
        <div className="w-dvw h-dvh fixed inset-0 overflow-hidden pointer-events-none">
            <Canvas className="absolute inset-0" camera={{ position: [0, 0, 5], fov: 60 }} style={{ background: 'transparent' }}>
                <ParticleSystem />
                <CameraController />
            </Canvas>
        </div>
    )
}