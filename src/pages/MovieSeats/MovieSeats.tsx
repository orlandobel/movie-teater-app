import { SeatsLayout } from "@/components/seatslayout/SeatsLayout"
import { PurchaseInfo } from "@/components/PurchaseInfo/PurchaseInfo"
import { EmptyLayout } from "@/layouts/emptylayout/emptylayout"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useMovieStore, type Movie, staticMovies } from "@/stores/moviesstore"
import "./MovieSeats.css"

export const MovieSeats = () => {
    const [movie, setMovie] = useState<Movie | undefined>(undefined)
    const { id } = useParams()
    const { movies } = useMovieStore()
    const setMovies = useMovieStore((state) => state.setMovies)

    useEffect(() => {
        if (movies.length > 0) return
        setMovies(staticMovies())
    }, [])

    useEffect(() => {
        setMovie(movies.find(movie => movie.id === Number(id)))
    }, [movies])

    return (<EmptyLayout className="PurchaseSeatsLayout">  
            <SeatsLayout />
            <PurchaseInfo movie={movie} />
    </EmptyLayout>)
}