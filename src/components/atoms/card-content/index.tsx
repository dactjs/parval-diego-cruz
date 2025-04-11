import { cn } from "@/lib/shadcn";

export type CardContentProps = React.ComponentProps<"div">;

export function CardContent({ className, ...rest }: CardContentProps) {
  return (
    <div data-slot="card-content" className={cn("px-6", className)} {...rest} />
  );
}
