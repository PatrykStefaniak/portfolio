'use client'

import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import AnimatedZoom from '../ui/animation/AnimateZoom';
import { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Background() {
    const refCanvasContainer = useRef<HTMLDivElement | null>(null);
    const isInView = useIntersectionObserver(refCanvasContainer);

    return (
        <div ref={refCanvasContainer} className='w-full h-full'>
            <Canvas frameloop={isInView ? 'always' : 'demand'}>
                <ambientLight />
                <directionalLight position={[0, 0, 5]} />
                <AnimatedZoom>
                    <Scene />
                </AnimatedZoom>
            </Canvas>
        </div>
    );
};