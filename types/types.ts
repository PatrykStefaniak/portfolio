export type Point = {
    index: number
    position: [number, number, number]
    currentPosition: [number, number, number]
}

export type PointAndRelation = Point & {
    relatedTo: (Point & { distance: number })[]
};

export type Project = {
    header: string
    text: string
    imageAlt: string
    imageSrc: string
    demoUrl?: string
    codeUrl: string
    technology?: string[]
}