import { cn } from "@/lib/shadcn";

export type TableFooterProps = React.ComponentProps<"tfoot">;

export function TableFooter({ className, ...rest }: TableFooterProps) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...rest}
    />
  );
}
