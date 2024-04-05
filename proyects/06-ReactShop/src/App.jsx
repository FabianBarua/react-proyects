import { useFilters } from './hooks/useFilters'
import { useState, useEffect } from 'react'
import { getProducts } from './services/products'

//componentes

import { Filters } from './components/Filters'
import { Cart } from './components/Cart'
import { MainHeader } from './components/MainHeader'
import { Products } from './components/Products'

function App () {
  const [products, setProducts] = useState([])
  const { filterProducts } = useFilters()

  useEffect(() => {
    getProducts().then(data => {
      return setProducts(data)
    })
  }, [])

  const filteredProducts = filterProducts(products)
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
