"use client";
import React, { ButtonHTMLAttributes } from "react";
import Ripples from "react-ripples";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}
export default function Button({
  color,
  children,
  ...buttonProps
}: ButtonProps) {
  return (
    <Ripples
      color={color}
      placeholder={null}
      onPointerEnterCapture={null}
      onPointerLeaveCapture={null}
    >
      <button {...buttonProps}>{children}</button>
    </Ripples>
  );
}
Button.defaultProps = {
  color: "rgba(255, 255, 255, 0.5)",
  className: "px-2 py-1 bg-gray-900",
  type: "button",
};
