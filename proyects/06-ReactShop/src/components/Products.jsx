import { addQuantitytIcon, RemoveFromCartIcon } from './Icons'
import { useContext } from 'react'
import { cartContext } from '../context/cart'

export const Products = ({ products }) => {
  const { addQuantity, removeFromCart, cart } = useContext(cartContext)

  const checkProductInCart = ({ productCart }) => {
    return cart.some(pro => pro.id === productCart.id)
  }

  return (
    <main className=' my-28'>
      <ul className=' w-2/3 mx-auto grid gap-7 grid-cols-[repeat(auto-fit,_minmax(150px,_200px))] place-content-center '>
        {products.map(product => {
          const inCart = checkProductInCart({ productCart: product })
          const classNameProd = ` mx-auto flex gap-4 rounded-lg bg-neutral-900 p-2 hover:bg-neutral-600/50 transition-all ease-in active:bg-neutral-600 border border-neutral-600 ${
            inCart &&
            ' bg-red-900/5  border-red-500 text-red-500 hover:bg-neutral-900/60'
          } `
          return (
            <li
              className=' flex justify-between pb-3  flex-col h-56  bg-neutral-800  rounded-md overflow-hidden'
              key={product.id}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className=' h-24 w-full object-cover'
              />
              <div className=' text-center px-4 leading-5'>
                <strong className=' line-clamp-2'>{product.title}</strong>
              </div>
              <button
                className={classNameProd}
                onClick={() => {
                  {
                    inCart
                      ? removeFromCart({ product })
                      : addQuantity({ product, quantity: 1 })
                  }
                }}
              >
                {inCart ? RemoveFromCartIcon() : addQuantitytIcon()} $
                {product.price}
              </button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
