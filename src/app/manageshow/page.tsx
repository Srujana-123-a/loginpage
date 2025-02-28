"use client"

import Link from "next/link"
import { useState } from "react"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Showroom {
  id: string
  branchName: string
  showroomNumber: string
  address: string
  city: string
  phone: string
}

const initialShowrooms: Showroom[] = [
  {
    id: "1",
    branchName: "Singanallur Branch",
    showroomNumber: "Showroom 1",
    address: "1A/Krithnarajapuram, 3 rd street sulur",
    city: "Coimbatore - 6313403",
    phone: "044- 653578",
  },
  {
    id: "2",
    branchName: "Slur Branch",
    showroomNumber: "Showroom 2",
    address: "54 Ramani colony, 3 rd street sulur",
    city: "Coimbatore - 63133452",
    phone: "044- 653763",
  },
  {
    id: "3",
    branchName: "Gaandipuram Branch",
    showroomNumber: "Showroom 3",
    address: "32/ Venkatasamy layout, 3 rd street sulur",
    city: "Coimbatore - 6313403",
    phone: "044- 653578",
  },
]

export default function ManageShowroomPage() {
  const [showrooms] = useState<Showroom[]>(initialShowrooms)

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Manage Showroom</h1>
          <Link href="/manageshow/addshowroom">
            <Button className="bg-[#6C47FF] hover:bg-[#6C47FF]/90">Add Showroom</Button>
          </Link>
        </div>

        <div className="grid gap-4">
          {showrooms.map((showroom) => (
            <Card key={showroom.id} className="overflow-hidden">
              <div className="grid md:grid-cols-[280px_1fr]">
                <div className="bg-[#F8F9FA] p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{showroom.branchName}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">{showroom.showroomNumber}</h4>
                      <p className="text-gray-500">{showroom.address}</p>
                      <p className="text-gray-500">{showroom.city}</p>
                      <p className="text-gray-500">{showroom.phone}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" className="text-[#6C47FF] hover:text-[#6C47FF]/90">
                        Edit
                      </Button>
                      {showroom.id === "1" ? (
                        <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                          Delete
                        </Button>
                      ) : (
                        <Button className="bg-[#6C47FF] hover:bg-[#6C47FF]/90">View</Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

