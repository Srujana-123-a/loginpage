"use client"

import Link from "next/link"
import { useState } from "react"
import { Box, CheckCircle, Clock } from "lucide-react"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CustomTable from "@/components/common/table/custom-pick"

import { picksData } from "@/components/common/column/pick-column"
import { picksColumns } from "@/components/common/column/pick-column"
import { MetricCard } from "@/components/metrics-card"

export default function PicksPage() {
  const [activeTab, setActiveTab] = useState("picks")

  return (
    <Layout>
      <div className="grid gap-6">
        <h1 className="text-xl font-semibold">Overall Picks</h1>

        {/* Metrics */}
        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard
            icon={
              <div className="bg-[#EBE8FF] p-2 rounded-lg">
                <Box className="h-6 w-6 text-[#6C47FF]" />
              </div>
            }
            label="Total Picks"
            value="37"
            subtitle="Last 7 days"
          />
          <MetricCard
            icon={
              <div className="bg-green-50 p-2 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
            }
            label="Completed"
            value="120"
            subtitle="Last 7 days"
          />
          <MetricCard
            icon={
              <div className="bg-purple-50 p-2 rounded-lg">
                <Clock className="h-6 w-6 text-purple-500" />
              </div>
            }
            label="Pending"
            value="120"
            subtitle="Last 7 days"
          />
        </div>

        {/* Picks Table */}
        <Card>
          <CardContent className="p-0">
            <div className="flex items-center justify-between border-b p-4">
              <div className="flex gap-4 items-center">
              <span
                  className={`cursor-pointer ${activeTab === "Pick" ? "text-[#6C47FF] border-b-2 border-[#6C47FF]" : "text-gray-500"}`}
                  onClick={() => setActiveTab("Pick")}
                >
                  Pick
                </span>
                <span
                  className={`cursor-pointer ${activeTab === "verification" ? "text-[#6C47FF] border-b-2 border-[#6C47FF]" : "text-gray-500"}`}
                  onClick={() => setActiveTab("verification")}
                >
                  Verification
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/pick/new-pick">
                  <Button variant="default" className="bg-[#6C47FF] hover:bg-[#6C47FF]/90">
                    New Pick
                  </Button>
                </Link>
                <Button variant="outline">Filters</Button>
              </div>
            </div>
            <CustomTable columns={picksColumns} data={picksData} />
            <div className="flex items-center justify-between border-t p-4">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <div className="text-sm text-gray-500">Page 1 of 10</div>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

