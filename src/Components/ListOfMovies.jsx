import { Movies } from "./Movies"
import { NoMoviesResults } from "./NoMoviesResults"

export const ListOfMovies = ({ movies }) => {

    const hasMovies = (movies?.length > 0)

    return (
        hasMovies 
            ?  <Movies movies={movies} />
            :  <NoMoviesResults />
    )
}