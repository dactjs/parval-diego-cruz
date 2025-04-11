import { Card, CardContent } from "@/components/molecules/card";
import { Label } from "@/components/atoms/label";
import { Skeleton } from "@/components/atoms/skeleton";

export function StatisticsPageSkeleton() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Gráfico de Tasas de Cupón</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="issuer-filter">Filtrar por Emisor</Label>
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="currency-filter">Filtrar por Moneda</Label>
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="maturity-filter">
            Filtrar por Año de Vencimiento
          </Label>

          <Skeleton className="h-10 w-full" />
        </div>
      </div>

      <Card className="w-full">
        <CardContent className="p-4">
          <div className="h-[500px] w-full flex flex-col">
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
                {/* Y-axis skeleton */}
                <div className="absolute left-8 h-[400px] w-10 flex flex-col justify-between">
                  <Skeleton className="h-4 w-10" />
                  <Skeleton className="h-4 w-8" />
                  <Skeleton className="h-4 w-10" />
                  <Skeleton className="h-4 w-6" />
                  <Skeleton className="h-4 w-8" />
                </div>

                {/* Chart bars skeleton */}
                <div className="w-full h-[400px] flex items-end justify-around px-16">
                  <Skeleton className="w-12 h-[30%]" />
                  <Skeleton className="w-12 h-[45%]" />
                  <Skeleton className="w-12 h-[60%]" />
                  <Skeleton className="w-12 h-[75%]" />
                  <Skeleton className="w-12 h-[40%]" />
                  <Skeleton className="w-12 h-[55%]" />
                  <Skeleton className="w-12 h-[70%]" />
                  <Skeleton className="w-12 h-[35%]" />
                </div>

                {/* X-axis skeleton */}
                <div className="w-full flex justify-around px-16 mt-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                </div>

                {/* Legend skeleton */}
                <div className="flex items-center justify-center mt-4">
                  <Skeleton className="h-4 w-4 mr-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
