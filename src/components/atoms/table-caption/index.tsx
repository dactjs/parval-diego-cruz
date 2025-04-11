import { cn } from "@/lib/shadcn";

export type TableCaptionProps = React.ComponentProps<"caption">;

export function TableCaption({ className, ...rest }: TableCaptionProps) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...rest}
    />
  );
}
