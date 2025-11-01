'use client'

import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import AnimatedZoom from './animation/AnimateZoom';

export default function Background() {
    return (
        <Canvas>
            <ambientLight />
            <directionalLight position={[0, 0, 5]} />
            <AnimatedZoom>
                <Scene />
            </AnimatedZoom>
        </Canvas>
    );
};