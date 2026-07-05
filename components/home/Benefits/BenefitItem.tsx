import type { LucideIcon } from "lucide-react"

export type Benefit = {
  title: string
  description: string
  icon: LucideIcon
}

type BenefitItemProps = {
  benefit: Benefit
}

export function BenefitItem({ benefit }: BenefitItemProps) {
  const Icon = benefit.icon

  return (
    <div className="flex flex-col items-center gap-3 text-center bg-muted p-5 rounded-lg w-[240px]">
      <Icon className="size-6 text-foreground" />
      <p className="text-sm text-foreground">{benefit.title}</p>
      <p className="text-sm text-brown-100">{benefit.description}</p>
    </div>
  )
}