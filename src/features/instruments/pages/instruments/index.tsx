import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/molecules/table";
import { Skeleton } from "@/components/atoms/skeleton";

import { InstrumentTable } from "../../components/organisms/instrument-table";
import { useInstruments } from "../../hooks/use-instruments";

export function InstrumentsPage() {
  const { loading, instruments } = useInstruments();

  if (loading) {
    return (
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-6">Panel Principal</h1>
        <Table>
          <TableHeader className="bg-green-600">
            <TableRow>
              <TableHead className="text-white font-bold border border-green-700 text-center">
                Cód. Emisor
              </TableHead>

              <TableHead className="text-white font-bold border border-green-700 text-center">
                Mon.
              </TableHead>

              <TableHead className="text-white font-bold border border-green-700 text-center">
                Fecha Emi.
              </TableHead>

              <TableHead className="text-white font-bold border border-green-700 text-center">
                Fecha Venc.
              </TableHead>

              <TableHead className="text-white font-bold border border-green-700 text-center">
                Fecha Ult. Oper.
              </TableHead>

              <TableHead className="text-white font-bold border border-green-700 text-center">
                Días Venc.
              </TableHead>

              <TableHead className="text-white font-bold border border-green-700 text-center">
                Frec. Pago
              </TableHead>

              <TableHead className="text-white font-bold border border-green-700 text-center">
                Tasa Cupón
              </TableHead>

              <TableHead className="text-white font-bold border border-green-700 text-center">
                Acciones
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from({ length: 20 }).map((_, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <TableCell className="border border-gray-200 text-center">
                  <Skeleton className="h-4 w-8 mx-auto" />
                </TableCell>

                <TableCell className="border border-gray-200 text-center">
                  <Skeleton className="h-4 w-10 mx-auto" />
                </TableCell>

                <TableCell className="border border-gray-200 text-center">
                  <Skeleton className="h-4 w-20 mx-auto" />
                </TableCell>

                <TableCell className="border border-gray-200 text-center">
                  <Skeleton className="h-4 w-20 mx-auto" />
                </TableCell>

                <TableCell className="border border-gray-200 text-center">
                  <Skeleton className="h-4 w-20 mx-auto" />
                </TableCell>

                <TableCell className="border border-gray-200 text-center">
                  <Skeleton className="h-4 w-12 mx-auto" />
                </TableCell>

                <TableCell className="border border-gray-200 text-center">
                  <Skeleton className="h-4 w-6 mx-auto" />
                </TableCell>

                <TableCell className="border border-gray-200 text-center">
                  <Skeleton className="h-4 w-14 mx-auto" />
                </TableCell>

                <TableCell className="border border-gray-200 text-center">
                  <div className="flex justify-center space-x-2">
                    <Skeleton className="h-8 w-8" />
                    <Skeleton className="h-8 w-8" />
                    <Skeleton className="h-8 w-8" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Panel Principal</h1>
      <InstrumentTable instruments={instruments} />
    </div>
  );
}

export default InstrumentsPage;
