import type { HTMLAttributes } from "react";
import "./styles.css";
export interface FlippyProps extends HTMLAttributes<HTMLDivElement> {
    flipDirection?: "vertical" | "horizontal";
    isFlipped?: boolean;
    flipOnHover?: boolean;
    flipOnClick?: boolean;
}
declare const Flippy: import("react").ForwardRefExoticComponent<FlippyProps & import("react").RefAttributes<unknown>>;
export default Flippy;
