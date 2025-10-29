'use client'

import { useFrame } from '@react-three/fiber';
import { useMemo, useState } from 'react';
import { Mesh } from 'three';
import DynamicLine from './DynamicLine';
import { getPointsAndRelations } from '@/lib/utils';

const AMOUNT_OF_POINTS = 100;
const pointsAndRelations = getPointsAndRelations(AMOUNT_OF_POINTS);

export default function Scene() {
    const [dots, setDots] = useState<Mesh[]>([]);

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

    useFrame(({ pointer, viewport }) => {
        const mouseX = (pointer.x * viewport.width) / 2;
        const mouseY = (pointer.y * viewport.height) / 2;
        
        dots.forEach((mesh, i) => {
            if (!mesh) {
                return;
            }
            
            const dx = mesh.position.x - mouseX;
            const dy = mesh.position.y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 1) {
                const currentPos = pointsAndRelations[i].currentPosition;
                const angle = Math.atan2(dy, dx);

                mesh.position.x = currentPos[0] + Math.cos(angle) * .03;
                mesh.position.y = currentPos[1] + Math.sin(angle) * .03;
            } else {
                const originalPos = pointsAndRelations[i].position;

                mesh.position.x += (originalPos[0] - mesh.position.x) * 0.01;
                mesh.position.y += (originalPos[1] - mesh.position.y) * 0.01;
            }

            pointsAndRelations[i].currentPosition = [mesh.position.x, mesh.position.y, mesh.position.z];
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