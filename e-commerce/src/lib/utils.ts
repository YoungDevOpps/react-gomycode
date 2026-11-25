import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Assemble des classes Tailwind sans conflit
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
