"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import Image from "next/image"
import img1 from "@/app/img1.jpeg"
import img2 from "@/app/img2.jpeg"
import img3 from "@/app/img3.jpeg"

const salesData = [
  { month: "Jan", purchase: 45000, sales: 48000 },
  { month: "Feb", purchase: 52000, sales: 48000 },
  { month: "Mar", purchase: 42000, sales: 50000 },
  { month: "Apr", purchase: 38000, sales: 42000 },
  { month: "May", purchase: 45000, sales: 43000 },
  { month: "Jun", purchase: 30000, sales: 40000 },
]

const orderData = [
  { month: "Jan", ordered: 3500, delivered: 3200 },
  { month: "Feb", ordered: 2800, delivered: 3000 },
  { month: "Mar", ordered: 2500, delivered: 2800 },
  { month: "Apr", ordered: 2800, delivered: 2600 },
  { month: "May", ordered: 2200, delivered: 3000 },
]

export default function DashboardPage() {
  return (
    <Layout>
      <div className="grid gap-6">
        {/* Sales Overview */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-4">
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-lg bg-blue-100 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V8C20 6.89543 19.1046 6 18 6H16M8 6V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V6M8 6H16"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12" r="3" stroke="#3B82F6" strokeWidth="2" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-1x font-bold text-gray-500">₹ 832</p>
                  <p className="text-sm text-gray-500">Sales</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-lg bg-purple-100 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 8V16M12 11V16M8 14V16M4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20Z"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-1x font-bold text-gray-500">₹ 18,300</p>
                  <p className="text-sm text-gray-500">Revenue</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-lg bg-orange-100 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13 7L18 12M18 12L13 17M18 12H6"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-1x font-bold text-gray-500">₹ 868</p>
                  <p className="text-sm text-gray-500">Profit</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-lg bg-green-100 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                      stroke="#22C55E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-1x font-bold text-gray-500">₹ 17,432</p>
                  <p className="text-sm text-gray-500">Cost</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inventory Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-lg bg-orange-100 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-1x font-bold text-gray-500">868</p>
                  <p className="text-sm text-gray-500">Quantity in Hand</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-lg bg-purple-100 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-1x font-bold text-gray-500">200</p>
                  <p className="text-sm text-gray-500">To be received</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Purchase Overview */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Purchase Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-4">
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-lg bg-blue-100 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 6L18 8M18 8L20 6M18 8V16M12 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H16C16.5304 4 17.0391 4.21071 17.4142 4.58579C17.7893 4.96086 18 5.46957 18 6"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-1x font-bold text-gray-500">82</p>
                  <p className="text-sm text-gray-500">Purchase</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-lg bg-green-100 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                      stroke="#22C55E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-1x font-bold text-gray-500">₹ 13,573</p>
                  <p className="text-sm text-gray-500">Cost</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-lg bg-purple-100 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21 4H3C2.44772 4 2 4.44772 2 5V19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19V5C22 4.44772 21.5523 4 21 4Z"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2V6M8 2V6M2 10H22"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-1x font-bold text-gray-500">5</p>
                  <p className="text-sm text-gray-500">Cancel</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-lg bg-orange-100 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 22V12H15V22"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-1x font-bold text-gray-500">₹ 17,432</p>
                  <p className="text-sm text-gray-500">Return</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-lg bg-blue-100 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-1x font-bold text-gray-500">31</p>
                  <p className="text-sm text-gray-500">Number of Suppliers</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-lg bg-purple-100 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-1x font-bold text-gray-500">21</p>
                  <p className="text-sm text-gray-500">Number of Categories</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="flex  flex-row justify-between items-center">
              <CardTitle>Sales & Purchase</CardTitle>
              <select className="text-sm border rounded p-1">
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Bar dataKey="purchase" fill="#818CF8" />
                  <Bar dataKey="sales" fill="#34D399" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={orderData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Line type="monotone" dataKey="ordered" stroke="#F59E0B" strokeWidth={2} />
                  <Line type="monotone" dataKey="delivered" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Stock Tables */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Top Selling Stock</CardTitle>
              <Button variant="link" className="text-sm text-blue-600">
                See All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 text-sm font-medium text-gray-500">
                  <div>Name</div>
                  <div>Sold Quantity</div>
                  <div>Remaining Quantity</div>
                  <div>Price</div>
                </div>
                <div className="grid grid-cols-4 items-center">
                  <div>Alternator</div>
                  <div>30</div>
                  <div>12</div>
                  <div>₹ 100</div>
                </div>
                <div className="grid grid-cols-4 items-center">
                  <div>Axle Shaft</div>
                  <div>21</div>
                  <div>15</div>
                  <div>₹ 207</div>
                </div>
                <div className="grid grid-cols-4 items-center">
                  <div>Brake Rotor</div>
                  <div>19</div>
                  <div>17</div>
                  <div>₹ 105</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Low Quantity Stock</CardTitle>
              <Button variant="link" className="text-sm text-blue-600">
                See All
              </Button>
            </CardHeader>
        
            <CardContent>
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
      <Image
                      src={img2}
                      alt="Strut Assembly"
                      className="h-12 w-12 rounded-lg bg-gray-100"
                      width={48}
                      height={48}
                    />
        <div>
          <p className="font-medium">Strut Assembly</p>
          <p className="text-sm text-gray-500">Remaining Quantity: 10 Packet</p>
        </div>
      </div>
      <span className="rounded bg-red-50 px-2 py-1 text-xs font-medium text-red-600">Low</span>
    </div>
    
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
      <Image
                      src={img1}
                      alt="Strut Assembly"
                      className="h-12 w-12 rounded-lg bg-gray-100"
                      width={48}
                      height={48}
                    />
        <div>
          <p className="font-medium">Brake Drum</p>
          <p className="text-sm text-gray-500">Remaining Quantity: 15 Packet</p>
        </div>
      </div>
      <span className="rounded bg-red-50 px-2 py-1 text-xs font-medium text-red-600">Low</span>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
      <Image
                      src={img3}
                      alt="Strut Assembly"
                      className="h-12 w-12 rounded-lg bg-gray-100"
                      width={48}
                      height={48}
                    />
        <div>
          <p className="font-medium">Thermostat</p>
          <p className="text-sm text-gray-500">Remaining Quantity: 15 Packet</p>
        </div>
      </div>
      <span className="rounded bg-red-50 px-2 py-1 text-xs font-medium text-red-600">Low</span>
    </div>
  </div>
</CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

