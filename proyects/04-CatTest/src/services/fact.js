import { FACT_API_URL } from '../../const'
export const generateFact = async () => {
  const res = await fetch(FACT_API_URL)
  const data = await res.json()
  return data.fact
}
