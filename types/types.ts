export type Point = {
    index: number
    position: [number, number, number]
    currentPosition: [number, number, number]
}

export type PointAndRelation = Point & {
    relatedTo: (Point & { distance: number })[]
};