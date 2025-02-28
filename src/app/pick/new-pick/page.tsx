"use client"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Layout } from "@/components/layout"

export default function NewPickPage() {
  const [date, setDate] = useState<Date>()
  const [products, setProducts] = useState([
    { name: "Alternator", id: "ID#673476", category: "Engine Components", quantity: 15 },
    { name: "Alternator", id: "ID#673476", category: "Engine Components", quantity: 19 },
  ])

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Showroom Details</h1>

        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Showroom Name</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Showroom No." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Showroom 1</SelectItem>
                  <SelectItem value="2">Showroom 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Showroom ID</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Showroom No." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">ID-001</SelectItem>
                  <SelectItem value="2">ID-002</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Date of delivery</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Enter date of delivery"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Product ID</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className="text-blue-600">{product.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div>
            <h3 className="text-lg font-semibold mb-4">Pick details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select product category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engine">Engine Components</SelectItem>
                    <SelectItem value="body">Body Parts</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Product Name</label>
                <Input placeholder="Enter product name" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Product ID</label>
                <Input placeholder="product ID" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Quantity</label>
                <Input placeholder="Enter product quantity" type="number" />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <Button variant="ghost" onClick={() => window.history.back()}>
                Discard
              </Button>
              <Button variant="outline" className="text-purple-600">
                Add Product
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">New Pick</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

