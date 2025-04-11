import { cn } from "@/lib/shadcn";

export type CardDescriptionProps = React.ComponentProps<"div">;

export function CardDescription({ className, ...rest }: CardDescriptionProps) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...rest}
    />
  );
}
