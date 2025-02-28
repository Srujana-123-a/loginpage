"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NewProductPage() {
  const [image, setImage] = useState<File | null>(null)
  const [productName, setProductName] = useState("")
  const [productId, setProductId] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const router = useRouter()

  const handleImageDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) {
      setImage(file)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      setImage(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("name", productName)
    formData.append("id", productId)
    formData.append("category", category)
    formData.append("price", price)
    formData.append("quantity", quantity)
    if (image) {
      formData.append("image", image)
    }

    try {
      const response = await fetch("/api/inventory/new-product", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        const result = await response.json()
        console.log("Product created:", result)
        router.push("/inventory") // Redirect to inventory page after successful creation
      } else {
        console.error("Failed to create product")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">New Product</h2>
      <form onSubmit={handleSubmit} className="grid gap-6 max-w-lg mx-auto">
        {/* Image Upload */}
        <div
          className="relative border-2 border-dashed rounded-lg p-4 h-[150px] flex flex-col items-center justify-center gap-2 hover:border-gray-400 transition-colors"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleImageDrop}
        >
          {image ? (
            <img
              src={URL.createObjectURL(image) || "/placeholder.svg"}
              alt="Product preview"
              className="max-h-full object-contain"
            />
          ) : (
            <>
              <p className="text-sm text-gray-500">Drag image here</p>
              <p className="text-sm text-gray-500">or</p>
              <label className="text-sm text-blue-600 cursor-pointer hover:underline">
                Browse image
                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
              </label>
            </>
          )}
        </div>

        {/* Form Fields */}
        <div className="grid gap-3">
          <div className="grid gap-1">
            <label className="text-sm">Product Name</label>
            <Input
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm">Product ID</label>
            <Input placeholder="Enter product ID" value={productId} onChange={(e) => setProductId(e.target.value)} />
          </div>
          <div className="grid gap-1">
            <label className="text-sm">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select product category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engine">Engine Components</SelectItem>
                <SelectItem value="transmission">Transmission & Drivetrain</SelectItem>
                <SelectItem value="suspension">Suspension & Steering</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-1">
            <label className="text-sm">Price</label>
            <Input placeholder="Enter price of the product" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="grid gap-1">
            <label className="text-sm">Quantity</label>
            <Input placeholder="Enter Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Discard
          </Button>
          <Button type="submit" className="bg-[#6C47FF] hover:bg-[#6C47FF]/90">
            Add Product
          </Button>
        </div>
      </form>
    </div>
  )
}

