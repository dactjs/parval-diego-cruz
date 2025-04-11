import { cn } from "@/lib/shadcn";

export type CardActionProps = React.ComponentProps<"div">;

export function CardAction({ className, ...rest }: CardActionProps) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...rest}
    />
  );
}
