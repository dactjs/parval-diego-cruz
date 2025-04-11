import { TableHeader } from "@/components/atoms/table-header";
import { TableBody } from "@/components/atoms/table-body";
import { TableFooter } from "@/components/atoms/table-footer";
import { TableRow } from "@/components/atoms/table-row";
import { TableHead } from "@/components/atoms/table-head";
import { TableCell } from "@/components/atoms/table-cell";
import { TableCaption } from "@/components/atoms/table-caption";
import { cn } from "@/lib/shadcn";

export type TableProps = React.ComponentProps<"table">;

export function Table({ className, ...rest }: TableProps) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...rest}
      />
    </div>
  );
}

export {
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
};
