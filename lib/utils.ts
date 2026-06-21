import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(priceInKopecks: number): string {
  const hryvnias = priceInKopecks / 100
  return `${hryvnias.toLocaleString("uk-UA")} грн`
}
