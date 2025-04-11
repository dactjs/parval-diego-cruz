import { cn } from "@/lib/shadcn";

export type DialogFooterProps = React.ComponentProps<"div">;

export function DialogFooter({ className, ...rest }: DialogFooterProps) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...rest}
    />
  );
}
