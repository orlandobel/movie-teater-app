import '@/App.css'
import { AppRouter } from '@/routes/AppRouter'
import { useMovieStore } from '@/stores/moviesstore'
import { useEffect } from 'react'
import { staticMovies } from '@/stores/moviesstore'

function App() {
    const setMovies = useMovieStore((state) => state.setMovies)
    
    useEffect(() => {
        setMovies(staticMovies())
    }, [])
    
    return (<>
            <AppRouter />
        </>)
}

export default App
