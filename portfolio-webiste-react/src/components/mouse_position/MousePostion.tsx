import { IMousePosition } from "./IMousePosition";

export const MousePosition: IMousePosition = {
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