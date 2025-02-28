"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Package, Filter, Check } from "lucide-react"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MetricCard } from "@/components/metrics-card"
import { StockUpdateDialog } from "@/components/stock-update"
import CustomTable from "@/components/common/table/custm-table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"

import { columns } from "@/components/common/column/inventory-column"
import { inventoryData } from "@/components/common/column/inventory-column"

const filterOptions = [
  { value: "In-stock", label: "In-Stock" },
  { value: "out-stock", label: "out-stock" },
]

export default function InventoryPage() {
  const [stockUpdateOpen, setStockUpdateOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)
  const router = useRouter()

  return (
    <Layout>
      <div className="grid gap-6">
        <h1 className="text-xl font-semibold">Overall Inventory</h1>

        {/* Metrics */}
        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard
            icon={
              <div className="bg-[#EBE8FF] p-2 rounded-lg">
                <Package className="h-6 w-6 text-[#6C47FF]" />
              </div>
            }
            label="Categories"
            value="120"
            subtitle="Last 7 days"
          />
          <MetricCard
            icon={
              <div className="bg-orange-50 p-2 rounded-lg">
                <Package className="h-6 w-6 text-orange-500" />
              </div>
            }
            label="Total Products"
            value="120"
            subtitle="Last 7 days"
          />
          <MetricCard
            icon={
              <div className="bg-red-50 p-2 rounded-lg">
                <Package className="h-6 w-6 text-red-500" />
              </div>
            }
            label="Low Stock"
            value="120"
            subtitle="Last 7 days"
          />
        </div>

        {/* Inventory Table */}
        <Card>
          <CardContent className="p-0">
            <div className="flex items-center justify-between border-b p-4">
              <div className="flex gap-4">
                <Button variant="ghost">Stock</Button>
                <Button variant="ghost">Categories</Button>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="default"
                  className="bg-[#6C47FF] hover:bg-[#6C47FF]/90"
                  onClick={() => setStockUpdateOpen(true)}
                >
                  Stock Update
                </Button>
                <Button variant="outline" onClick={() => router.push("/inventory/new-product")}>
                  New Stock
                </Button>
                <Popover open={filterOpen} onOpenChange={setFilterOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0" align="end">
                    <Command>
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                          {filterOptions.map((option) => (
                            <CommandItem
                              key={option.value}
                              onSelect={() => {
                                setSelectedFilter(option.value === selectedFilter ? null : option.value)
                                setFilterOpen(false)
                              }}
                            >
                              <Check
                                className={`mr-2 h-4 w-4 ${
                                  selectedFilter === option.value ? "opacity-100" : "opacity-0"
                                }`}
                              />
                              {option.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <CustomTable columns={columns} data={inventoryData} />
          </CardContent>
        </Card>
      </div>

      <StockUpdateDialog open={stockUpdateOpen} onOpenChange={setStockUpdateOpen} />
    </Layout>
  )
}

