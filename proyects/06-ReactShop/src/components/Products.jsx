import { AddToCartIcon } from './Icons'
export const Products = ({ products }) => {
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
              <button>{AddToCartIcon()}</button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
