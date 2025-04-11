import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/shadcn";

import { variants } from "./variants";

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof variants> {
  asChild?: boolean;
}

export function Button({
  asChild,
  variant,
  size,
  className,
  ...rest
}: ButtonProps) {
  const Element = asChild ? Slot : "button";

  return (
    <Element
      data-slot="button"
      className={cn(variants({ variant, size, className }))}
      {...rest}
    />
  );
}
