import { RefObject } from "react";

export type BlurEffectParams = {
    containerRef: RefObject<HTMLDivElement>;
    innerRef: RefObject<HTMLDivElement>;    
}