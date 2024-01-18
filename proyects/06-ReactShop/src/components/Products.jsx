import { AddToCartIcon } from './Icons'
import { useContext } from 'react'
import { cartContext } from '../context/cart'

export const Products = ({ products }) => {
  const { addToCart } = useContext(cartContext)

  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <button
                onClick={() => {
                  addToCart({ product })
                }}
              >
                {AddToCartIcon()}
              </button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
