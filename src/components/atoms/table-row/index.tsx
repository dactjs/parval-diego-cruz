import { cn } from "@/lib/shadcn";

export type TableRowProps = React.ComponentProps<"tr">;

export function TableRow({ className, ...rest }: TableRowProps) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...rest}
    />
  );
}
