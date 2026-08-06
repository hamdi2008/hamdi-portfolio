import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "dark" | "outline" | "light" | "light-outline";
  size?: "default" | "large";
};

export function Button({ href, children, variant = "dark", size = "default", className = "", ...props }: ButtonProps) {
  return <a href={href} className={`button button-${variant} button-${size} ${className}`} {...props}>{children}</a>;
}
