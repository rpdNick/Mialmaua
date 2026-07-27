import { FilterItem } from "./FilterItem"

type FilterGroupProps = {
  title: string
  items: string[]
  idPrefix: string
  isChecked: (item: string) => boolean
  onToggle: (item: string) => void
}

export function FilterGroup({
  title,
  items,
  idPrefix,
  isChecked,
  onToggle,
}: FilterGroupProps) {
  return (
    <div>
      <p className="mb-2 text-sm text-brown-100 uppercase">{title}</p>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <FilterItem
            key={item}
            id={`${idPrefix}-${item}`}
            label={item}
            checked={isChecked(item)}
            onCheckedChange={() => onToggle(item)}
          />
        ))}
      </div>
    </div>
  )
}