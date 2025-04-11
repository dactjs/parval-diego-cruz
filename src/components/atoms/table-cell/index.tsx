import { cn } from "@/lib/shadcn";

export type TableCellProps = React.ComponentProps<"td">;

export function TableCell({ className, ...rest }: TableCellProps) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...rest}
    />
  );
}
