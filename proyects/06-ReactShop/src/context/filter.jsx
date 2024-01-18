import { createContext, useState } from 'react'
// Envolver
export const FilterContext = createContext()

//usar
export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState({ category: 'all', minPrice: 0 })

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}
