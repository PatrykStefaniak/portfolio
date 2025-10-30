'use client'

import { useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Mesh, Vector3 } from 'three';
import DynamicLine from './DynamicLine';
import { getPointsAndRelations } from '@/lib/utils';

const AMOUNT_OF_POINTS = 100;
const pointsAndRelations = getPointsAndRelations(AMOUNT_OF_POINTS);

export default function Scene() {
    const [dots, setDots] = useState<Mesh[]>([]);
    const cursorInWindowRef = useRef(true);
    const mousePosRef = useRef<{x: number, y: number} | null>(null);

    useEffect(() => {
        const handleMouseEnter = () => {
            cursorInWindowRef.current = true;
        };
        const handleMouseLeave = () => {
            cursorInWindowRef.current = false;
        };
        const handleMouseMove = (e: MouseEvent) => {
            mousePosRef.current = { x: e.clientX, y: e.clientY };
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousemove', handleMouseMove)
        };
    }, []);

    const renderedPoints = useMemo(() => {
        const dotsRefs = new Map<number, Mesh>();
        const jsx = pointsAndRelations.map((pointAndRelations, index) => {
            return (
                <mesh
                    key={index}
                    ref={(el) => {
                        if (el) {
                            dotsRefs.set(index, el);

                            if (dotsRefs.size === pointsAndRelations.length) {
                                const mapEntries = [...dotsRefs.entries()];

                                mapEntries.sort((a, b) => a[0] - b[0]);

                                setDots(Array.from(new Map(mapEntries).values()));
                            }
                        }
                    }}
                    position={pointAndRelations.position}
                >
                    <circleGeometry args={[0.025]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            );
        });

        return jsx;
    }, []);

    useFrame(({ viewport }) => {
        if (!mousePosRef.current) {
            return;
        }

        const pointer = mousePosRef.current;
        const x = (pointer.x / window.innerWidth) * 2 - 1;
        const y = -(pointer.y / window.innerHeight) * 2 + 1;

        const mouseX = (x * viewport.width) / 2;
        const mouseY = (y * viewport.height) / 2;

        const updatePos = (index: number, pos: Vector3) => {
            pointsAndRelations[index].currentPosition = [pos.x, pos.y, pos.z];
        };
        
        dots.forEach((mesh, i) => {
            if (!mesh) {
                return;
            }

            const position = mesh.position;

            if (cursorInWindowRef.current) {
                const dx = position.x - mouseX;
                const dy = position.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 1) {
                    const currentPos = pointsAndRelations[i].currentPosition;
                    const angle = Math.atan2(dy, dx);
                    const strengh =  Math.min(0.05 * (1 - distance) / (distance * distance), 0.12);

                    position.x = currentPos[0] + Math.cos(angle) * strengh;
                    position.y = currentPos[1] + Math.sin(angle) * strengh;

                    return updatePos(i, position);
                }
            }

            const originalPos = pointsAndRelations[i].position;

            position.x += (position.x - originalPos[0]) * -0.02;
            position.y += (position.y - originalPos[1]) * -0.02;

            updatePos(i, position)
        });
    });

    return (
        <group>
            {renderedPoints}
            {
                dots.length && pointsAndRelations.map((pointAndRelations, index) => (
                    pointAndRelations.relatedTo.map((targetData, targetIndex) => {
                        return (
                            <DynamicLine
                                key={index + "relation" + targetIndex}
                                startRef={dots[pointAndRelations.index]}
                                endRef={dots[targetData.index]}
                            />
                        );
                    })
                ))
            }
        </group>
    );
};