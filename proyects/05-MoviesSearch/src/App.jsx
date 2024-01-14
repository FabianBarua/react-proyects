import './App.css'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Movies } from './components/movies'
import { useDebouncedCallback } from 'use-debounce'
import { MagicMotion } from 'react-magic-motion'

function App () {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies } = useMovies()

  const handleSubmit = event => {
    event.preventDefault()
    getMovies({ search })
  }

  const debounced = useDebouncedCallback(() => {
    getMovies({ search })
  }, 500)

  const handleChange = event => {
    const value = event.target.value
    if (value === ' ') return
    setSearch(value)
    debounced()
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
