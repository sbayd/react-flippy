import type { HTMLAttributes, ReactNode } from "react";
export interface FlippyCardProps extends HTMLAttributes<HTMLDivElement> {
    cardType?: "back" | "front";
    elementType?: string;
    animationDuration?: number;
    children?: ReactNode;
}
export interface FrontBackSideProps extends FlippyCardProps {
    isFlipped?: boolean;
}
export declare function FrontSide({ isFlipped, style, animationDuration, ...props }: FrontBackSideProps): JSX.Element;
export declare function BackSide({ isFlipped, style, ...props }: FrontBackSideProps): JSX.Element;
