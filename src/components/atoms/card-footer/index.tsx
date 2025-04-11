import { cn } from "@/lib/shadcn";

export type CardFooterProps = React.ComponentProps<"div">;

export function CardFooter({ className, ...rest }: CardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...rest}
    />
  );
}
