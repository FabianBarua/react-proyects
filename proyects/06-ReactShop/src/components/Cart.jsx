import { cartContext } from '../context/cart'
import { useContext } from 'react'
import { CartIcon } from './Icons'
import { useId } from 'react'
import { ProducInCart } from './ProducInCart'
export const Cart = () => {
  const { cart, addQuantity, clearCart } = useContext(cartContext)
  const cartCheckboxId = useId()

  return (
    <>
      <label
        className=' w-10 h-10 fixed z-10 bg-neutral-800 rounded-md flex justify-center items-center top-5 right-5 cursor-pointer border border-neutral-700 hover:bg-neutral-700 transition-all ease-in '
        htmlFor={cartCheckboxId}
      >
        <CartIcon />
      </label>

      <input id={cartCheckboxId} type='checkbox' className='peer' hidden />

      <div className=' border shadow-black shadow-lg border-neutral-500 peer-checked:flex flex-col hidden fixed w-64 min-h-64  overflow-hidden max-h-[96vh] bg-neutral-900 backdrop-blur-xl top-4 right-4 rounded-md'>
        <h1 className=' text-center text-xl text-neutral-200 py-3 px-6 border-b-neutral-500 border-b m-0 p-0 h-min w-full'>
          Cart 🔥
        </h1>

        <div className='py-3 px-6 flex flex-1 gap-4 flex-col overflow-auto '>
          {cart.length > 0 && (
            <button
              onClick={() => {
                clearCart()
              }}
              className='bg-neutral-800 rounded-md border border-neutral-700 text-neutral-500 py-2  hover:bg-red-950/50 hover:text-red-500 hover:border-red-500 transition-all ease-out active:bg-red-900'
            >
              Clear Cart
            </button>
          )}
          {cart.map(product => {
            return (
              <ProducInCart
                product={product}
                addQuantity={addQuantity}
                key={product.id}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
