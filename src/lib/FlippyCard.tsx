import React, { HTMLAttributes, ReactNode } from "react";

export interface FlippyCardProps extends HTMLAttributes<HTMLDivElement> {
  cardType?: "back" | "front";
  elementType?: string;
  animationDuration?: number;
  children?: ReactNode;
}
function FlippyCard({
  className,
  cardType,
  style,
  elementType,
  animationDuration = 600,
  children,
  ...rest
}: FlippyCardProps) {
  return React.createElement(
    elementType || "div",
    {
      className: `flippy-card flippy-${cardType} ${className || ""}`,
      ...rest,
      style: {
        ...(style || {}),
        ...{ transitionDuration: `${animationDuration / 1000}s` },
      },
    },
    children
  );
}

export interface FrontBackSideProps extends FlippyCardProps {
  isFlipped?: boolean;
}
export function FrontSide({
  isFlipped,
  style,
  animationDuration,
  ...props
}: FrontBackSideProps) {
  return (
    <FlippyCard
      {...props}
      style={{
        ...(style || {}),
      }}
      animationDuration={animationDuration}
      cardType="front"
    />
  );
}

export function BackSide({ isFlipped, style, ...props }: FrontBackSideProps) {
  return (
    <FlippyCard
      {...props}
      style={{
        ...(style || {}),
      }}
      cardType="back"
    />
  );
}
