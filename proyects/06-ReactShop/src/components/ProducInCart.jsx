export const ProducInCart = ({ product, addQuantity }) => {
  return (
    <div className='flex flex-col gap-4 rounded-md '>
      <img
        className='w-full h-32 object-cover border border-neutral-700 rounded-md'
        src={product.thumbnail}
        alt={product.title}
      />
      <h3 className=' text-center'>{product.title}</h3>
      <div className='flex flex-col justify-center items-center gap-2'>
        <div className='flex gap-2'>
          <button
            className='  w-0 h-0 p-4 flex justify-center items-center rounded-md border border-neutral-700 bg-neutral-800 hover:bg-green-950 hover:text-green-200 hover:border-green-500 transition-all ease-out active:bg-green-900 '
            onClick={() => {
              addQuantity({ product, quantity: 1 })
            }}
          >
            +
          </button>
          <button
            className='  w-0 h-0 p-4 flex justify-center items-center rounded-md border border-neutral-700 bg-neutral-800   hover:bg-red-950 hover:text-red-200 hover:border-red-500 transition-all ease-out active:bg-red-900 '
            onClick={() => {
              addQuantity({ product, quantity: -1 })
            }}
          >
            -
          </button>
        </div>
        <p>Qty: {product.quantity}</p>
      </div>
    </div>
  )
}
