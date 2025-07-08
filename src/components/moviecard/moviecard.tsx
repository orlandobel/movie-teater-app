import noPoster from "@assets/img/no-poster.png"
import { Link } from "react-router"
import type { Movie } from "@/stores/moviesstore"
import "./moviecard.css"

interface MovieCardProps {
    movie: Movie
}

export const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <figure className="moviecard">
            <img className="moviecard__poster" src={movie.poster} alt={movie.title} />
            
            <figcaption className="moviecard__footer">
                <label className="moviecard__footer__info">
                    <span>{movie.title}</span>
                    <small>{movie.duration}m</small>
                    <small>{movie.classification}</small>
                </label>
                <Link className="moviecard__footer__buy" to="/movie/1/foo">Comprar boletos →</Link>
            </figcaption>
        </figure>
    )
}