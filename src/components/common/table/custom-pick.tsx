import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Define interfaces for the table props
interface Column {
  key: string
  header: string
}

interface TableProps {
  columns: Column[]
  data: Record<string, any>[] // Using Record type for flexible data structure
}

export default function CustomTable({ columns, data }: TableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column: Column) => (
            <TableHead key={column.key}>{column.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: Record<string, any>, index: number) => (
          <TableRow key={index}>
            {columns.map((column: Column) => (
              <TableCell key={column.key}>
                {column.key === "action" ? (
                  <button className="rounded-md px-2 py-1 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90">
                    Action
                  </button>
                ) : (
                  item[column.key]
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

