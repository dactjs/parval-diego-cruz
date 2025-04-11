import { cn } from "@/lib/shadcn";

export type SkeletonProps = React.ComponentProps<"div">;

export function Skeleton({ className, ...rest }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...rest}
    />
  );
}
