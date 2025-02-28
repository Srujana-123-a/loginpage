"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ProductDetailsDialog } from "@/components/product-details"

interface CustomTableProps {
  columns: { key: string; header: string }[]
  data: any[]
}

export default function CustomTable({ columns, data }: CustomTableProps) {
  const [selectedProduct, setSelectedProduct] = useState<any>()
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key}>{column.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <button
                  className="text-left hover:text-[#6C47FF]"
                  onClick={() => {
                    setSelectedProduct(item)
                    setDialogOpen(true)
                  }}
                >
                  {item.product}
                </button>
              </TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                    item.availability === "In- stock" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.availability}
                </span>
              </TableCell>
              <TableCell>{/* Action buttons */}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ProductDetailsDialog open={dialogOpen} onOpenChange={setDialogOpen} product={selectedProduct} />
    </>
  )
}

