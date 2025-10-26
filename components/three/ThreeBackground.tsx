'use client'

import { Canvas } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';

const amountOfPoints = 100;

type Position = [number, number, number]

type PointAndRelation = {
    position: Position
    relatedTo: { position: Position; distance: number }[]
};

const pointsAndRelations = ((): PointAndRelation[] => {
    const points: PointAndRelation[] = Array.from({ length: amountOfPoints }, () => {
        return {
            position: [Math.random() * 17 - 8.5, Math.random() * 7 - 3.5, 0],
            relatedTo: []
        };
    });

    for (let i = 0; i < points.length; i++) {
        const currentPoint = points[i];

        for (let j = i + 1; j < points.length; j++) {
            const targetPoint = points[j];

            const distance = Math.sqrt(
                Math.pow(targetPoint.position[0] - currentPoint.position[0], 2) +
                Math.pow(targetPoint.position[1] - currentPoint.position[1], 2) +
                Math.pow(targetPoint.position[2] - currentPoint.position[2], 2)
            );

            if (distance <= 1) {
                currentPoint.relatedTo.push({
                    position: targetPoint.position,
                    distance: distance
                });
            }
        }
    }

    return points;
})();

export default function ThreeBackground() {
    return (
        <Canvas>
            <ambientLight />
            <directionalLight position={[0, 0, 5]} />
            {
                pointsAndRelations.map((pointAndRelations, index) => {
                    return (
                        <group key={index}>
                            <mesh
                                key={index}
                                position={pointAndRelations.position}
                            >
                                <circleGeometry args={[0.025]} />
                                <meshStandardMaterial color="white" />
                            </mesh>
                            {
                                pointAndRelations.relatedTo.map((targetData, targetIndex) => {
                                    const opacity = -1 * targetData.distance + 1.15;

                                    return (
                                        <Line
                                            transparent
                                            opacity={opacity > 1 ? 1 : opacity}
                                            key={index + "relation" + targetIndex}
                                            linewidth={1}
                                            color="rgb(0, 225, 255)"
                                            points={[
                                                pointAndRelations.position,
                                                targetData.position
                                            ]}
                                        />
                                    );
                                })
                            }
                        </group>
                    )
                })
            }
            {/* <OrbitControls /> */}
        </Canvas>
    );
};