import React, { HTMLAttributes } from "react";
import "./styles.css";
export interface FlippyProps extends HTMLAttributes<HTMLDivElement> {
    flipDirection?: string;
    isFlipped?: boolean;
    flipOnHover?: boolean;
    flipOnClick?: boolean;
}
declare const Flippy: React.ForwardRefExoticComponent<FlippyProps & React.RefAttributes<unknown>>;
export default Flippy;
