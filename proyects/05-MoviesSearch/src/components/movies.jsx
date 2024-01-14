const ListOfMovies = ({ movies }) => {
  return (
    <ul className='movies'>
      {movies.map(movie => (
        <li className='movie' key={movie.id}>
          <div className='poster'>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.name} />
          </div>
          <h3>{movie.name}</h3>
        </li>
      ))}
    </ul>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return hasMovies ? (
    <ListOfMovies movies={movies} />
  ) : (
    <p className='nada'>No hay pelis</p>
  )
}
