import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.jsx'
import { useCategories } from '../hooks/useCategories.jsx'

export function Filters () {
  const { filter, setFilter } = useFilters()
  const { categories } = useCategories()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = event => {
    setFilter(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = event => {
    setFilter(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className=' fixed flex bg-neutral-900 px-8 py-4 rounded-2xl gap-4 flex-col bottom-5 left-5 w-48'>
      <div className='  flex flex-col gap-1'>
        <label htmlFor={minPriceFilterId}>
          Precio a partir de: ${filter.minPrice}
        </label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filter.minPrice}
          className=' inline'
        />
      </div>

      <div className=' flex flex-col gap-1'>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select
          className=' bg-neutral-800 rounded-md'
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value='all'>Todas</option>
          {categories?.map(categorie => {
            return (
              <option key={categorie.slug} value={categorie.slug}>
                {categorie.name}
              </option>
            )
          })}
        </select>
      </div>
    </section>
  )
}
