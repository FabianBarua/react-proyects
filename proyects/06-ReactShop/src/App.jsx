import { Products } from './components/Products'
import * as mock from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { Filters } from './components/filters'

function App () {
  const { filter, setFilter, filterProducts } = useFilters()

  const filteredProducts = filterProducts(mock.products)

  return (
    <>
      <Filters setFilter={setFilter} filter={filter} />
      <Products products={filteredProducts}></Products>
    </>
  )
}

export default App
