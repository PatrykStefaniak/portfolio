'use client'

import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import Scene from './Scene';

export default function Background() {

    return (
        <Canvas>
            <ambientLight />
            <directionalLight position={[0, 0, 5]} />
            <Scene />
            {/* <OrbitControls /> */}
        </Canvas>
    );
};