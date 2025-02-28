// Example of how to use the CustomTable component
import CustomTable from "@/components/common/table/custom-pick"

export default function ExamplePage() {
  const columns = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "status", header: "Status" },
    { key: "action", header: "Action" },
  ]

  const data = [
    { id: 1, name: "Product 1", status: "Active" },
    { id: 2, name: "Product 2", status: "Inactive" },
    { id: 3, name: "Product 3", status: "Active" },
  ]

  return <CustomTable columns={columns} data={data} />
}

