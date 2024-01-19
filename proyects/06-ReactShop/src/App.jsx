import { Products } from './components/Products'
import * as mock from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { Filters } from './components/filters'
import { Cart } from './components/Cart'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(mock.products)

  return (
    <>
      <header className=' h-24 px-4 bg-neutral-800/50 backdrop-blur-md w-full mb-48  fixed top-0  flex justify-center items-center'>
        <h1 className=' text-2xl flex-1 text-center '>React Shop 🛒</h1>
        <Cart />
      </header>
      <Filters />

      <Products products={filteredProducts}></Products>
    </>
  )
}

export default App
