import { cn } from "@/lib/shadcn";

export type TableHeaderProps = React.ComponentProps<"thead">;

export function TableHeader({
  className,
  ...rest
}: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...rest}
    />
  );
}
