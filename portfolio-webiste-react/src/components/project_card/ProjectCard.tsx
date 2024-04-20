import './styles_project_card.css'
import { useRef, useEffect } from 'react';

interface MousePosition {
    _x: number;
    _y: number;
    x: number;
    y: number;
    updatePosition: (event: MouseEvent) => void;
    setOrigin: (element: HTMLElement) => void;
}

export default function ProjectCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const inner = innerRef.current;

        if (!container || !inner) return;

        const mouse: MousePosition = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,
            updatePosition: function (event: MouseEvent) {
                this.x = event.clientX - this._x;
                this.y = (event.clientY - this._y) * -1;
            },
            setOrigin: function (element: HTMLElement) {
                this._x = element.getBoundingClientRect().left + element.getBoundingClientRect().width / 2;
                this._y = element.getBoundingClientRect().top + element.getBoundingClientRect().height / 2;
            },
        };

        let counter = 0;
        const updateRate = 10;
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

    return (
        <div ref={containerRef} className="container">
            <article ref={innerRef} className="project-card small-card inner">
                <div className="project-content">
                    <h3>Boat BasketBall Unity</h3>
                    <div className="project-overview">
                        <p>A 3D Unity game featuring boat characters playing basketball.
                            This project is a simple multiplayer game.
                            It utilizes C# for Unity and follows SOLID principles.
                            The project has resulted in better understanding of programming practices and better
                            code
                            maintainablity.
                        </p>
                    </div>
                    <div className="project-info">
                        <a href="https://github.com/Efai-De-Leon/Boat-BasketBall-Unity/tree/fb7c38f624a7e4710b0addc31d91eeeef189ecdb"
                            className="btn">Github Repository</a>
                    </div>
                </div>
                <figure>
                    <img src="boat-webp-animated.webp" alt="Boat BasketBall GIF" />
                </figure>
            </article>
        </div>
    )
}
