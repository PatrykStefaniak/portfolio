import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type DynamicLineProps = {
    startRef: THREE.Mesh | null
    endRef: THREE.Mesh | null
}

export default function DynamicLine(props: DynamicLineProps) {
    const {startRef, endRef} = props;
    const [line, setLine] = useState<THREE.Line | null>(null);
    const geometryRef = useRef(new THREE.BufferGeometry());

    useEffect(() => {
        const positions = new Float32Array(6);
        const material = new THREE.LineBasicMaterial({ color: "rgb(0, 225, 255)" });

        geometryRef.current.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        setLine(new THREE.Line(geometryRef.current, material));
    }, []);

    useFrame(() => {
        if (!line || !startRef || !endRef) {
            return;
        }

        const positions = geometryRef.current.attributes.position.array;

        if (
            positions[0] == startRef.position.x &&
            positions[1] == startRef.position.y &&
            positions[3] == endRef.position.x &&
            positions[4] == endRef.position.y
        ) {
            return;
        }

        positions[0] = startRef.position.x;
        positions[1] = startRef.position.y;
        positions[3] = endRef.position.x;
        positions[4] = endRef.position.y;

        geometryRef.current.attributes.position.needsUpdate = true;
    });

    return line ? (
        <primitive
            object={line}
        />
        ) : null;
}