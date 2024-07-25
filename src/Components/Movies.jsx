export const Movies = ({ movies }) => {
    
    return (
        <ul className="movies">
            {
                movies.map(movie => (
                    <li className="movie" key={movie.id}>
                        <h3> {movie.title} </h3>
                        <p> {movie.year} </p>
                        <img src={movie.poster} alt={movie.title} width={200} height={200} />
                    </li> 
                ))
            }
        </ul>
    )
}