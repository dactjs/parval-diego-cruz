import { cn } from "@/lib/shadcn";

export type TableBodyProps = React.ComponentProps<"tbody">;

export function TableBody({ className, ...rest }: TableBodyProps) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...rest}
    />
  );
}
