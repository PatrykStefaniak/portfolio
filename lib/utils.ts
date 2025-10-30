import { Point, PointAndRelation } from "@/types/types";

export function getPointsAndRelations(amountOfPoints: number): PointAndRelation[] {
    let i = 0;
    const points: PointAndRelation[] = Array.from({ length: amountOfPoints }, () => {
        const pos = [Math.random() * 17.75 - 8.875, Math.random() * 7.75 - 3.875, 0] as [number, number, number];
        const point: PointAndRelation = {
            index: i,
            position: pos,
            currentPosition: pos,
            relatedTo: [] as (Point & { distance: number })[]
        };

        i++;

        return point;
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
                    index: targetPoint.index,
                    position: targetPoint.position,
                    distance: distance,
                    currentPosition: targetPoint.position
                });
            }
        }
    }

    return points;
};