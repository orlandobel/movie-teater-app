import noPoster from "@assets/img/no-poster.png"
import { Link } from "react-router"
import "./moviecard.css"

export const MovieCard = () => {
    return (
        <div className="moviecard">
            <div className="moviecard__poster">
                <img src={noPoster} alt="" />
            </div>
            <div className="moviecard__footer">
                <label className="moviecard__footer__info">
                    <span>Some Large Movie Name</span>
                    <small>120min</small>
                    <small>A</small>
                </label>
                <Link className="moviecard__footer__buy" to="/movie/1/foo">Comprar boletos →</Link>
            </div>
        </div>
    )
}