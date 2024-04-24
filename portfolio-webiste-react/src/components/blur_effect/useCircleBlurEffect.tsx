import { MousePosition } from "../mouse_position/MousePostion";
import { BlurEffectParams } from "./BlurEffectParams";
import { useEffect } from "react";


export function useCircleBlurEffect({containerRef, innerRef}: BlurEffectParams) {
    const mouse = MousePosition;

    useEffect(() => {
        const container: HTMLDivElement | null= containerRef.current;
        const inner: HTMLDivElement | null = innerRef.current;

        if (!container || !inner) return;

        let counter: number = 0;
        const updateRate: number = 10;
        const isTimeToUpdate = function () {
            return counter++ % updateRate === 0;
        };

        const onMouseEnterHandler = function (event: MouseEvent) {
            mouse.setOrigin(container);
            update(event);
        };

        const onMouseLeaveHandler = function () {
            inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
        };

        const onMouseMoveHandler = function (event: MouseEvent) {
            if (isTimeToUpdate()) {
                update(event);
                updateColor(event);
            }
        };

        const update = function (event: MouseEvent) {
            mouse.updatePosition(event);
            updateTransformStyle(
                (mouse.y / inner.offsetHeight / 2).toFixed(2),
                (mouse.x / inner.offsetWidth / 2).toFixed(2)
            );
        };

        const updateColor = function (event: MouseEvent) {
            const { x, y } = inner.getBoundingClientRect();
            inner.style.setProperty("--x", `${event.clientX - x}`);
            inner.style.setProperty("--y", `${event.clientY - y}`);
        }

        const updateTransformStyle = function (x: string, y: string) {
            const numX = -parseFloat(x) / 2;
            const numY = -2 * parseFloat(y);
            inner.style.transform = `rotateX(${numX}deg) rotateY(${numY}deg)`;
        };

        container.addEventListener('mouseenter', onMouseEnterHandler);
        container.addEventListener('mouseleave', onMouseLeaveHandler);
        container.addEventListener('mousemove', onMouseMoveHandler);

        return () => {
            container.removeEventListener('mouseenter', onMouseEnterHandler);
            container.removeEventListener('mouseleave', onMouseLeaveHandler);
            container.removeEventListener('mousemove', onMouseMoveHandler);
        };
    }, []);
}