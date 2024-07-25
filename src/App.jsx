import './App.css'
import { useCallback } from 'react'
import { ListOfMovies } from './Components/ListOfMovies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

export const App = () => {
    const { search, setSearch, error } = useSearch()
    const { movies, getMovies, loading } = useMovies({ search })
    
    // Evita que la busqueda se haga continuamente al escribir
    const debouncedGetMovies = useCallback(
        debounce(search => {
            console.log('search', search)
            getMovies({ search })
        }, 300), 
    [getMovies])
        
    const handleSubmit = (e) => {
        e.preventDefault()
        getMovies({ search })
    }

    const handleChange = (e) => {
        const newSearch = e.target.value
        setSearch(newSearch)
        debouncedGetMovies(newSearch)
    }

    return (
        <div className='page'>
            <header>
                <h1> Test Search Movies </h1>
                <form className='form' onSubmit={handleSubmit}>
                    <input type='text' onChange={handleChange} name='input' placeholder="Avengers, Matrix, Stars Wars, Phanter..." />
                    <button type='submit'> Buscar </button>
                </form>
                {error && <p style={{ color: 'red' }}> {error}  </p>}
            </header>

            <main>
                { loading 
                    ? <p> Cargando ... </p>
                    : <ListOfMovies movies={movies}/>
                }
            </main>
        </div>
    )
}