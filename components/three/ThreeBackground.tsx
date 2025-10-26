'use client'
import { Canvas } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';

const amountOfPoints = 100;

type Position = [number, number, number]

type PointAndRelation = {
    position: Position
    relatedTo: Position[]
};

const pointsAndRelations = ((): PointAndRelation[] => {
    const points: PointAndRelation[] = Array.from({ length: amountOfPoints }, () => {
        return {
            position: [Math.random() * 13.5 - 6.75, Math.random() * 6.25 - 3.125, 1],
            relatedTo: []
        };
    });

    for (let i = 0; i < points.length; i++) {
        const currentPoint = points[i];

        for (let j = i + 1; j < points.length; j++) {
            const targetPoint = points[j];

            if (
                targetPoint.position.every((point, index) =>
                    Math.abs(point - currentPoint.position[index]) <= 1
                )
            ) {
                currentPoint.relatedTo.push(targetPoint.position);
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
                                pointAndRelations.relatedTo.map((targetPoint, targetIndex) => {
                                    return (
                                        <Line
                                            key={index + "relation" + targetIndex}
                                            linewidth={1}
                                            color="white"
                                            points={[
                                                pointAndRelations.position,
                                                targetPoint
                                            ]}
                                        />
                                    );
                                })
                            }
                        </group>
                    )
                })
            }
            <OrbitControls />
        </Canvas>
    );
};