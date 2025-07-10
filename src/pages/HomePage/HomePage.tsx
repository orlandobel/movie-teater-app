import { Mainlayout } from "@/layouts/mainlayout"
import { MovieCard } from "@/components/moviecard/moviecard"
import { useMovieStore, staticMovies, type Movie } from "@/stores/moviesstore"
import { useEffect, useState } from "react"
import "./HomePage.css"

export const HomePage = () => {
    const [displayMovies, setDisplayMovies] = useState<Movie[]>([])
    const { movies } = useMovieStore()
    const setMovies = useMovieStore((state) => state.setMovies)

    useEffect(() => {
        if (movies.length === 0) setMovies(staticMovies())
        setDisplayMovies(movies)
    }, [])

    const onSearch = (search: string) => {
        const filteredMovies = movies.filter((movie) => 
            movie.title.toLowerCase().includes(search.toLowerCase()))

        setDisplayMovies(filteredMovies)
    }

    return (
        <Mainlayout className="HomePage" onSearch={onSearch}>
            {displayMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </Mainlayout>
    )
}