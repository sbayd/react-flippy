import * as react from 'react';
import { HTMLAttributes, ReactNode } from 'react';

interface FlippyProps extends HTMLAttributes<HTMLDivElement> {
    flipDirection?: string;
    isFlipped?: boolean;
    flipOnHover?: boolean;
    flipOnClick?: boolean;
}
declare const Flippy: react.ForwardRefExoticComponent<FlippyProps & react.RefAttributes<unknown>>;

interface FlippyCardProps extends HTMLAttributes<HTMLDivElement> {
    cardType?: "back" | "front";
    elementType?: string;
    animationDuration?: number;
    children?: ReactNode;
}
interface FrontBackSideProps extends FlippyCardProps {
    isFlipped?: boolean;
}
declare function FrontSide({ isFlipped, style, animationDuration, ...props }: FrontBackSideProps): JSX.Element;
declare function BackSide({ isFlipped, style, ...props }: FrontBackSideProps): JSX.Element;

export { BackSide, FlippyCardProps, FlippyProps, FrontBackSideProps, FrontSide, Flippy as default };
