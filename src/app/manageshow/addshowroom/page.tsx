"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ShowroomFormData {
  name: string
  id: string
  email: string
  password: string
  contact: string
  location: string
}

const initialFormData: ShowroomFormData = {
  name: "",
  id: "",
  email: "",
  password: "",
  contact: "",
  location: "",
}

export default function AddShowroomPage() {
  const [formData, setFormData] = useState<ShowroomFormData>(initialFormData)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle form submission
    console.log(formData)
    router.push("/manager")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Layout>
      <div className="container mx-auto max-w-3xl py-6">
        <Card>
          <CardHeader>
            <CardTitle>Add Showroom</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Showroom Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Type showroom number"
                  className="col-span-3"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="id" className="text-right">
                  Showroom ID
                </Label>
                <Input
                  id="id"
                  name="id"
                  placeholder="showroom id"
                  className="col-span-3"
                  value={formData.id}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email ID
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email id"
                  className="col-span-3"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  className="col-span-3"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="contact" className="text-right">
                  Showroom Contact
                </Label>
                <Input
                  id="contact"
                  name="contact"
                  type="tel"
                  placeholder="Enter Showroom contact number"
                  className="col-span-3"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="location" className="text-right">
                  Showroom Location
                </Label>
                <Textarea
                  id="location"
                  name="location"
                  placeholder="Give the location of the Showroom"
                  className="col-span-3 min-h-[100px]"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => router.push("/manager")}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-[#6C47FF] hover:bg-[#6C47FF]/90">
                  Add Showroom
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

