import { useCallback, useRef, useState } from "react"
import { searchMovies }  from "../services/searchMovies.js"

export const useMovies = ({ search }) => {
    const [ movies, setMovies ] = useState([])
    const [ loading, setLoading] = useState(false)
    const previousSearch = useRef(search)

    const getMovies = useCallback(async ({ search }) => {
        if(search === previousSearch.current) return
        // search es ''

        try{
            setLoading(true)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
            setLoading(false)
        }
        catch(e){
            console.log(e.message)
        }
        finally{
            setLoading(false)
        }

    }, [])
 
    return { movies, getMovies, loading }

}