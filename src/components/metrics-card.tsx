interface MetricCardProps {
  icon: React.ReactNode
  label: string
  value: string
  subtitle?: string
}

export function MetricCard({ icon, label, value, subtitle }: MetricCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-lg border p-4 shadow-sm">
      {icon}
      <div className="space-y-1">
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-2xl font-semibold">{value}</p>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </div>
  )
}
