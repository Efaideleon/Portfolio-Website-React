export interface IMousePosition {
    _x: number;
    _y: number;
    x: number;
    y: number;
    updatePosition: (event: MouseEvent) => void;
    setOrigin: (element: HTMLElement) => void;
}

