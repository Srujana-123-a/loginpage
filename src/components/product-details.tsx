"use client"

import { Pencil, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductDetailsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product?: {
    product: string
    id: string
    quantity: number
    price: string
    category: string
    availability: string
  }
}

export function ProductDetailsDialog({ open, onOpenChange, product }: ProductDetailsDialogProps) {
  if (!product) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2x">{product.product}</DialogTitle>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Pencil className="h-4 w-4" />
                Edit
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Primary Details</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-sm text-gray-500">Product name</div>
                      <div>{product.product}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-sm text-gray-500">Product ID</div>
                      <div>{product.id}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-sm text-gray-500">Product category</div>
                      <div>{product.category}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Stock Locations</h3>
                  <div className="rounded-lg border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Locations</TableHead>
                          <TableHead>Stock in hand</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>R(1,1)</TableCell>
                          <TableCell className="text-blue-600">15</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>H(8,9)</TableCell>
                          <TableCell className="text-blue-600">19</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-square rounded-lg border-2 border-dashed p-4 flex items-center justify-center">
                  <img src="/placeholder.svg" alt={product.product} className="max-w-full max-h-full object-contain" />
                </div>
                <div className=" flex flex-row  mt-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-sm text-gray-500">Quantity</div>
                    <div>40</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm text-gray-500">Threshold value</div>
                    <div>12</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

