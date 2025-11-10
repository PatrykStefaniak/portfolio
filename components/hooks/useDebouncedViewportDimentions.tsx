import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export default function useDebouncedViewportDimentions(debounceTime: number = 500) {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const {viewport} = useThree();
    const [dimentions, setDimentions] = useState([viewport.width, viewport.height]);

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setDimentions([viewport.width, viewport.height]);
        }, debounceTime);
    }, [viewport.width, viewport.height, debounceTime]);

    return dimentions;
}