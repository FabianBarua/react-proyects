import { useEffect, useState } from 'react'
import { getCategories } from '../services/products.js'

export const useCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then(data => setCategories(data))
  }, [])
  return { categories }
}
