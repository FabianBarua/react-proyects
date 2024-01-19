import * as mock from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { Filters } from './components/filters'
import { Cart } from './components/Cart'
import { MainHeader } from './components/MainHeader'
import { Products } from './components/Products'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(mock.products)

  return (
    <>
      <MainHeader>
        <h1 className=' text-2xl flex-1 text-center '>React Shop 🛒</h1>
        <Cart />
      </MainHeader>

      <Filters />

      <Products products={filteredProducts}></Products>
    </>
  )
}

export default App
