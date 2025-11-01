'use client'

import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import AnimatedZoom from './animation/AnimateZoom';
import { useEffect, useRef, useState } from 'react';

export default function Background() {
    const refCanvasContainer = useRef<HTMLDivElement | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (!refCanvasContainer.current) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0 }
        );
        const canvas = refCanvasContainer.current.querySelector('canvas');

        if (canvas) {
            observer.observe(canvas);
        }

        return () => {
            observer.disconnect();
        }
    }, []);

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