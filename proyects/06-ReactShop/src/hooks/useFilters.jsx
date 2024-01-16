import { useContext } from 'react'
import { FilterContext } from '../context/filter'

export const useFilters = () => {
  const { filter, setFilter } = useContext(FilterContext)

  const filterProducts = products => {
    return products.filter(product => {
      return (
        product.price >= filter.minPrice &&
        (filter.category === 'All' || filter.category === product.category)
      )
    })
  }

  return { filter, setFilter, filterProducts }
}
