import { useEffect, useState } from 'react'

// Comme useState, mais la valeur est sauvegardée dans le localStorage.
// Quand on recharge la page, on retrouve la valeur.
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const saved = localStorage.getItem(key)
    if (saved === null) {
      return initialValue
    }
    return JSON.parse(saved) as T
  })

  // À chaque changement, on sauvegarde
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
