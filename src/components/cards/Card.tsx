"use client";
import React, { HTMLAttributes } from "react";
import Ripples from "react-ripples";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  rippleColor?: string;
}
export default function Card({
  rippleColor,
  children,
  ...cardProps
}: CardProps) {
  return (
    <Ripples
      color={rippleColor}
      placeholder={null}
      onPointerEnterCapture={null}
      onPointerLeaveCapture={null}
      {...cardProps}
    >
      {children}
    </Ripples>
  );
}
Card.defaultProps = {
  rippleColor: "rgba(255, 255, 255, 0.5)",
  className: "p-4 rounded-md bg-gray-100 dark:bg-gray-900",
};
