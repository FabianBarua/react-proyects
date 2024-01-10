import { useState, useEffect } from 'react'
import { generateFact } from '../services/fact'

export const useFact = () => {
  const [fact, setfact] = useState(null)

  const refreshFact = () => {
    generateFact().then(newFact => setfact(newFact))
  }
  useEffect(() => {
    if (fact !== null) return
    refreshFact()
    return () => {}
  })

  return [fact, refreshFact]
}
