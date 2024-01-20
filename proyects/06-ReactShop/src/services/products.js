export const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products')
  const data = await response.json()
  const products = data.products.map(product => ({
    id: product.id,
    title: product.title,
    thumbnail: product.thumbnail,
    price: product.price,
    category: product.category
  }))

  return products
}

export const getCategories = async () => {
  const response = await fetch('https://dummyjson.com/products/categories')
  const data = await response.json()

  return data
}
