import cn from "clsx";
import React from "react";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "orange" | "white";
  size?: "sm" | "md" | "lg";
}

export const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  variant,
  size = "md",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(
        "rounded-xl font-medium shadow px-10 py-2 hover:shadow-lg transition duration-300 ease-in-out",
        {
          "text-white bg-primary": variant === "orange",
          "text-primary bg-white": variant === "white",
          "px-5 py-2 text-sm": size === "sm",
        },
        className
      )}
    >
      {children}
    </button>
  );
};
