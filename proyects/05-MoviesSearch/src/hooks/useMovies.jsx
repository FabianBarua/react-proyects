import { useRef, useState, useCallback, useMemo } from 'react'

const API_URL = search =>
  `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=es-ES&page=1`

export function useMovies ({ sort, direction }) {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.results

  const lastSearch = useRef('')

  const mappedMovies = movies?.map(movie => ({
    id: movie.id,
    name: movie.title,
    year: movie.release_date.split('-')[0],
    poster: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : '/404.jpg'
  }))
  const getMoviesCallback = useCallback(({ search }) => {
    async function getMovies ({ search }) {
      if (search !== '' && search) {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTdhMTFkMzc0M2IzZDliMzlkODI2MWVjYzUwMWE5ZiIsInN1YiI6IjY0ODliNDgyYmYzMWYyNTA1ODgzZDRmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IADE1QnUguQB9MUKYb-dBFbWH2avqDj5bjsoAgHU1ls'
          }
        }

        fetch(API_URL(search), options)
          .then(response => response.json())
          .then(response => setResponseMovies(response))
          .catch(err => addQuantity.error(err))
      } else {
        setResponseMovies([])
      }
      lastSearch.current = search
    }

    getMovies({ search })
  }, [])

  const sortedMovies = useMemo(() => {
    return sort && mappedMovies
      ? [...mappedMovies].sort((a, b) => {
          const propA = a[sort]
          const propB = b[sort]

          if (sort !== 'default') {
            const comparison = propA.localeCompare(propB)

            return direction ? comparison : -comparison
          } else {
            return 0
          }
        })
      : mappedMovies
  }, [sort, direction, mappedMovies])

  return { movies: sortedMovies, getMovies: getMoviesCallback }
}
