import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/shadcn";

export type DialogTitleProps = React.ComponentProps<
  typeof DialogPrimitive.Title
>;

export function DialogTitle({ className, ...rest }: DialogTitleProps) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...rest}
    />
  );
}
