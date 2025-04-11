import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/shadcn";

export type DialogDescriptionProps = React.ComponentProps<
  typeof DialogPrimitive.Description
>;

export function DialogDescription({
  className,
  ...rest
}: DialogDescriptionProps) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...rest}
    />
  );
}
