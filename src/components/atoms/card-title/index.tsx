import { cn } from "@/lib/shadcn";

export type CardTitleProps = React.ComponentProps<"div">;

export function CardTitle({ className, ...rest }: CardTitleProps) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...rest}
    />
  );
}
