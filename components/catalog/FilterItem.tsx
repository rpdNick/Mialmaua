import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

type FilterItemProps = {
  id: string
  label: string
  checked: boolean
  onCheckedChange: () => void
}

export function FilterItem({ id, label, checked, onCheckedChange }: FilterItemProps) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
      <Label htmlFor={id} className="text-sm font-normal">
        {label}
      </Label>
    </div>
  )
}