"use client"

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, Filter, Pencil, Trash2 } from "lucide-react"

// Sample data - in a real app this would come from an API
const users = [
  {
    id: 1,
    name: "Sriram",
    phone: "90574368590",
    email: "picker1@gmail.com",
    address: "5B/372C, Coats Nagar, Thoothukudi",
  },
  {
    id: 2,
    name: "Sairam",
    phone: "90574368590",
    email: "picker1@gmail.com",
    address: "5B/372C, Coats Nagar, Thoothukudi",
  },
  {
    id: 3,
    name: "Chandru",
    phone: "90574368590",
    email: "picker1@gmail.com",
    address: "5B/372C, Coats Nagar, Thoothukudi",
  },
  {
    id: 4,
    name: "Mahesh",
    phone: "90574368590",
    email: "picker1@gmail.com",
    address: "5B/372C, Coats Nagar, Thoothukudi",
  },
  {
    id: 5,
    name: "Karthick",
    phone: "90574368590",
    email: "picker1@gmail.com",
    address: "5B/372C, Coats Nagar, Thoothukudi",
  },
  {
    id: 6,
    name: "Rajkumar",
    phone: "90574368590",
    email: "picker1@gmail.com",
    address: "5B/372C, Coats Nagar, Thoothukudi",
  },
  {
    id: 7,
    name: "Muthuraaman",
    phone: "90574368590",
    email: "picker1@gmail.com",
    address: "5B/372C, Coats Nagar, Thoothukudi",
  },
  {
    id: 8,
    name: "Rahul",
    phone: "90574368590",
    email: "picker1@gmail.com",
    address: "5B/372C, Coats Nagar, Thoothukudi",
  },
  {
    id: 9,
    name: "Selvin",
    phone: "90574368590",
    email: "picker1@gmail.com",
    address: "5B/372C, Coats Nagar, Thoothukudi",
  },
]

export default function RolesPage() {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Role Manager</h1>
          <div className="flex gap-2">
            <Button className="bg-[#6C47FF] hover:bg-[#5535FF]">
              <Calendar className="mr-2 h-4 w-4" />
              New User
            </Button>
            <Button variant="outline" className="border-gray-300">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone number</TableHead>
                <TableHead>Email ID</TableHead>
                <TableHead>Address</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-500 hover:text-blue-600">
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between border-t px-4 py-2">
            <Button variant="ghost" className="text-sm" disabled>
              Previous
            </Button>
            <span className="text-sm text-gray-600">Page 1 of 10</span>
            <Button variant="ghost" className="text-sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

