import { useState } from "react";
import { EditIcon, Trash2Icon, LineChartIcon } from "lucide-react";

import type { Instrument } from "@/features/instruments/schemas/instruments";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/molecules/table";
import { Button } from "@/components/atoms/button";

import { HistoryDialog } from "../history-dialog";

export interface InstrumentTableProps {
  instruments: Instrument[];
}

export function InstrumentTable({ instruments }: InstrumentTableProps) {
  const [selectedTicker, setSelectedTicker] = useState<string | null>(null);

  const handleEdit = (index: number) => {
    alert(`Editando registro ${index + 1}`);
  };

  const handleDelete = (index: number) => {
    alert(`Eliminando registro ${index + 1}`);
  };

  return (
    <>
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
          {instruments.map((instrument, index) => (
            <TableRow
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <TableCell className="border border-gray-200 text-center font-medium">
                {instrument.issuer}
              </TableCell>

              <TableCell className="border border-gray-200 text-center">
                {instrument.currency}
              </TableCell>

              <TableCell className="border border-gray-200 text-center">
                {instrument.issueDate}
              </TableCell>

              <TableCell className="border border-gray-200 text-center">
                {instrument.maturityDate}
              </TableCell>

              <TableCell className="border border-gray-200 text-center">
                {instrument.lastOperationDate}
              </TableCell>

              <TableCell className="border border-gray-200 text-center">
                {instrument.daysToMaturity}
              </TableCell>

              <TableCell className="border border-gray-200 text-center">
                {instrument.paymentFrequency}
              </TableCell>

              <TableCell className="border border-gray-200 text-center">
                {instrument.couponRate.toFixed(3)}
              </TableCell>

              <TableCell className="border border-gray-200 text-center">
                <div className="flex justify-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    title="Editar"
                    onClick={() => handleEdit(index)}
                  >
                    <EditIcon className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    title="Eliminar"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(index)}
                  >
                    <Trash2Icon className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    title="Ver Histórico"
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => setSelectedTicker(instrument.ticker)}
                  >
                    <LineChartIcon className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedTicker && (
        <HistoryDialog
          ticker={selectedTicker}
          open={Boolean(selectedTicker)}
          onOpenChange={(state) =>
            setSelectedTicker((prev) => (state ? prev : null))
          }
        />
      )}
    </>
  );
}
