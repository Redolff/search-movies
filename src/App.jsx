import './App.css'
import { ListOfMovies } from './Components/ListOfMovies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

export const App = () => {
    const { search, setSearch, error } = useSearch()
    const { movies, getMovies, loading } = useMovies({ search })

    const handleSubmit = (e) => {
        e.preventDefault()
        getMovies({ search })
    }

    const handleChange = (e) => {
        const newSearch = e.target.value
        getMovies({ search: newSearch })
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