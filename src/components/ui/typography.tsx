import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

export function TypographyH1({ children, className }: IProps) {
  return (
    <h1
      className={cn("text-3xl font-bold text-[#1F1F1F] lg:text-4xl", className)}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: IProps) {
  return (
    <h2
      className={cn(
        "pb-2 text-2xl font-semibold text-[#1F1F1F] first:mt-0 lg:text-3xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: IProps) {
  return (
    <h3
      className={cn("text-xl font-bold text-[#1F1F1F] lg:text-2xl", className)}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: IProps) {
  return (
    <h4
      className={cn("text-lg font-bold text-[#1F1F1F] lg:text-xl", className)}
    >
      {children}
    </h4>
  );
}

export function TypographyH5({ children, className }: IProps) {
  return (
    <h5
      className={cn("text-base font-bold text-[#1F1F1F] lg:text-lg", className)}
    >
      {children}
    </h5>
  );
}

export function TypographySm({ children, className }: IProps) {
  return (
    <small className={cn("text-sm leading-none", className)}>{children}</small>
  );
}

export function TypographyXs({ children, className }: IProps) {
  return (
    <small className={cn("text-xs leading-none", className)}>{children}</small>
  );
}
export function Typography({ children, className }: IProps) {
  return <p className={cn("text-sm lg:text-base", className)}>{children}</p>;
}

export function TypographyMd({ children, className }: IProps) {
  return <p className={cn("text-lg leading-7", className)}>{children}</p>;
}

export function TypographyLead({ children, className }: IProps) {
  return (
    <p className={cn("text-muted-foreground text-xl", className)}>{children}</p>
  );
}
