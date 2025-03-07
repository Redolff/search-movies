const API_KEY = 'd9c5495b'
//const API = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`

export const searchMovies = async ({ search }) => {
    if(search === '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const data = await response.json()
        const movies = data.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))

    }catch(error){
        throw new Error('Error searchig movies')
    }
        
}