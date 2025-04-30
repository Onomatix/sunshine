
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "link";
  size?: "sm" | "md" | "lg";
}

const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "font-medium rounded-md transition-all duration-200 inline-flex items-center justify-center",
        {
          "bg-olive text-white hover:bg-olive/90 shadow-sm": variant === "primary",
          "bg-khaki text-white hover:bg-khaki/90 shadow-sm": variant === "secondary",
          "bg-transparent border border-khaki text-khaki hover:bg-khaki/10": variant === "outline",
          "bg-transparent text-olive hover:underline p-0": variant === "link",
          "text-sm px-3 py-1.5": size === "sm",
          "px-4 py-2": size === "md",
          "text-lg px-6 py-2.5": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
