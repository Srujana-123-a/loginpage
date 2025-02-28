"use client"

import Link from "next/link"
import type React from "react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  LogOut,
  Search,
  Bell,
  Sun,
  Moon,
  User,
  Mail,
  Phone,
  MapPin,
  Truck,
  HomeIcon,
  PickaxeIcon as PicksIcon,
  FileText,
  Users,
  DatabaseIcon as InventoryIcon,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface LayoutProps {
  children: React.ReactNode
}

interface UserProfile {
  name: string
  email: string
  phone: string
  address: string
}

export function Layout({ children }: LayoutProps) {
  const pathname = usePathname()
  const [theme, setTheme] = useState("light")
  const [showProfile, setShowProfile] = useState(false)
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    email: "",
    phone: "",
    address: "",
  })
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light"
    setTheme(storedTheme)
    document.documentElement.classList.toggle("dark", storedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleProfileUpdate = () => {
    setIsUpdating(true)
    // Simulate an API call
    setTimeout(() => {
      console.log("Profile updated:", profile)
      setIsUpdating(false)
      setShowProfile(false)
      // You can add a toast notification here if you have a toast component
      alert("Profile updated successfully!")
    }, 1000)
  }

  const navItems = [
    { href: "/dashboard", icon: HomeIcon, label: "Dashboard" },
    { href: "/inventory", icon: InventoryIcon, label: "Inventory" },
    { href: "/pick", icon: PicksIcon, label: "Picks" },
    { href: "/manageshow", icon: FileText, label: "Manage Showroom" },
    { href: "/role", icon: Users, label: "Role Manager" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white dark:bg-gray-800 dark:border-gray-700">
        <div className="flex h-16 items-center gap-2 border-b px-4 dark:border-gray-700">
          <Truck className="h-6 w-6 text-[#6C47FF]" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Ware<span className="text-[#6C47FF]">Sys</span>
          </span>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors ${
                pathname === item.href
                  ? "bg-[#6C47FF]/10 text-[#6C47FF] dark:bg-[#6C47FF]/20 dark:text-[#6C47FF]"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <button className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
            <LogOut size={20} />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-4 dark:bg-gray-800 dark:border-gray-700">
          <div className="w-96">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-300" />
              <Input
                type="search"
                placeholder="Search product, supplier, order"
                className="pl-8 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
              <Bell size={20} />
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Profile</h4>
                    {isUpdating && <p className="text-sm text-blue-500">Updating...</p>}
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <User className="h-4 w-4" />
                      <Input
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                        className="col-span-2 h-8"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Mail className="h-4 w-4" />
                      <Input
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="col-span-2 h-8"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Phone className="h-4 w-4" />
                      <Input
                        name="phone"
                        value={profile.phone}
                        onChange={handleProfileChange}
                        className="col-span-2 h-8"
                        placeholder="Your Phone"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <MapPin className="h-4 w-4" />
                      <Input
                        name="address"
                        value={profile.address}
                        onChange={handleProfileChange}
                        className="col-span-2 h-8"
                        placeholder="Your Address"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setShowProfile(false)}>
                      Log out
                    </Button>
                    <Button onClick={handleProfileUpdate} disabled={isUpdating}>
                      {isUpdating ? "Updating..." : "Update Profile"}
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 dark:text-white">{children}</main>
      </div>
    </div>
  )
}

