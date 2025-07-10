import { Mainlayout } from "@/layouts/mainlayout"
import { MovieCard } from "@/components/moviecard/moviecard"
import { useMovieStore, staticMovies } from "@/stores/moviesstore"
import { useEffect } from "react"
import "./HomePage.css"

export const HomePage = () => {
    const { movies } = useMovieStore()
    const setMovies = useMovieStore((state) => state.setMovies)

    useEffect(() => {
        if (movies.length > 0) return
        setMovies(staticMovies())
    }, [])

    return (
        <Mainlayout className="HomePage">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </Mainlayout>
    )
}