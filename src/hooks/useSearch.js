import { useEffect, useRef, useState } from "react"

export const useSearch = () => {
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)

    useEffect(() => {
        if(isFirstInput.current){
            isFirstInput.current = (search === '')
            return
        }

        if(search === ''){
            setError('Las busquedas no pueden ser vacias')
            return
        }
        if(search.match(/^\d+$/)){
            setError('No se puede buscar una pelicula con un numero')
            return
        }
        if(search.length < 3){
            setError('Las busquedas deben ser de mas de 3 caracteres')
            return
        }
        setError(null)

    }, [search])

    return { search, setSearch, error }

}