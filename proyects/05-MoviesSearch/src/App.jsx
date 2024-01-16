import './App.css'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Movies } from './components/movies'
import { useDebouncedCallback } from 'use-debounce'
import { MagicMotion } from 'react-magic-motion'
import { useState } from 'react'

const SORT_ITEMS = [
  { id: 'default', text: 'Sort by...' },
  { id: 'name', text: 'Name' },
  { id: 'year', text: 'Year' }
]

function App () {
  const { search, setSearch, error } = useSearch()
  const [sort, setSort] = useState(SORT_ITEMS[0].id)
  const [direction, setDirection] = useState(true)
  const { movies, getMovies } = useMovies({ sort, direction })
  const handleSubmit = event => {
    event.preventDefault()
    getMovies({ search })
  }

  const debounced = useDebouncedCallback(() => {
    getMovies({ search })
    console.log(error)
  }, 500)

  const handleChange = event => {
    const value = event.target.value
    if (value === ' ') return
    setSearch(value)
    if (error === null) debounced()
  }

  const handleSortSelect = event => {
    const value = event.target.value
    setSort(value)
    console.log(value)
  }

  const changeDirection = () => {
    setDirection(!direction)
  }
  return (
    <MagicMotion>
      <div className='page'>
        <header>
          <h1>Search movies ✨</h1>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              name='search'
              type='text'
              placeholder='Buscar una pelicula'
              value={search}
            />
            <select
              className='sort'
              name='sort'
              value={sort}
              onChange={handleSortSelect}
            >
              {SORT_ITEMS.map((option, index) => (
                <option key={index} value={option.id}>
                  {option.text}
                </option>
              ))}
            </select>
            <button onClick={changeDirection} className='az'>
              {direction ? 'A-Z' : 'Z-A'}
            </button>
          </form>
          {error && <p className='error'>{error}</p>}
        </header>

        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </MagicMotion>
  )
}

export default App
