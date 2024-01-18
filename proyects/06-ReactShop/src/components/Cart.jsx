import { cartContext } from '../context/cart'
import { useContext } from 'react'
import { CartIcon } from './Icons'
import { useId } from 'react'
export const Cart = () => {
  const { cart, addToCart } = useContext(cartContext)
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
      <div className=' peer-checked:flex flex-col hidden fixed w-64 min-h-64  overflow-hidden max-h-[96vh] bg-neutral-800/80 backdrop-blur-xl top-4 right-4 rounded-md'>
        <h1 className=' text-center text-xl text-neutral-200 py-3 px-6 border-b-neutral-500 border-b m-0 p-0 h-min w-full'>
          Cart 🔥
        </h1>
        <div className='py-3 px-6 flex gap-4 flex-col '>
          {cart.map(product => {
            return (
              <div key={product.id} className='flex flex-col gap-4 rounded-md '>
                <img
                  className='w-full h-32 object-cover border border-neutral-700 rounded-md'
                  src={product.thumbnail}
                  alt={product.title}
                />
                <h3 className=' text-center'>{product.title}</h3>
                <div className='flex justify-center gap-4'>
                  <button
                    className=' w-0 h-0 p-4 flex justify-center items-center rounded-md border border-neutral-700 bg-neutral-800'
                    onClick={() => {
                      addToCart({ product })
                    }}
                  >
                    +
                  </button>
                  <p>Qty: {product.quantity}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
