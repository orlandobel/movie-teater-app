import { Mainlayout } from "@/layouts/mainlayout"
import noPoster from "@assets/img/no-poster.png"
import { FunctionCheckbox } from "@components/function/FunctionCheckbox/FunctionCheckbox"
import { FunctionLink } from "@components/function/FunctionLink/FunctionLink"
import { useMovieStore, type Movie, staticMovies } from "@/stores/moviesstore"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import "./MovieDetails.css"

export const MoovieDetails = () => {
    const [movie, setMovie] = useState<Movie | undefined>(undefined)
    const [functionDay, setFunctionDay] = useState<string | undefined>(undefined)

    const { id } = useParams()
    const { movies } = useMovieStore()
    const setMovies = useMovieStore((state) => state.setMovies)

    const seatsPath = `/movie/${id}/${movie?.title}/seats`
    
    useEffect(() => {
        setMovies(staticMovies())
    }, [])    

    useEffect(() => {
        setMovie(movies.find(movie => movie.id === Number(id)))
    }, [movies])

    function onDayClick(day: string) {
        setFunctionDay(day)
    }
    
    return (<Mainlayout className="MovieDetails">
        <section className="MovieDetails__poster">
            <img src={movie?.poster || noPoster} alt="" />
        </section>

        <section className="MovieDetails__info">  
            <div className="MovieDetails__info__MovieInfo">
                <h1>{movie?.title}</h1>
                <div>
                    <small>{movie?.duration}min</small>
                    <small>{movie?.classification}</small>
                </div>
            </div>

            <div className="MovieDetails__info__FunctionInfo">
                <h2>Semana 01/07/2025 - 08/07/2025</h2>

                <div>
                    <FunctionCheckbox onClick={() => onDayClick("Lunes")} name="functionDay" label="Lunes" />
                    <FunctionCheckbox onClick={() => onDayClick("Martes")} name="functionDay" label="Martes" />
                    <FunctionCheckbox onClick={() => onDayClick("Miercoles")} name="functionDay" label="Miercoles" />
                    <FunctionCheckbox onClick={() => onDayClick("Jueves")} name="functionDay" label="Jueves" />
                    <FunctionCheckbox onClick={() => onDayClick("Viernes")} name="functionDay" label="Viernes" />
                    <FunctionCheckbox onClick={() => onDayClick("Sabado")} name="functionDay" label="Sabado" />
                    <FunctionCheckbox onClick={() => onDayClick("Domingo")} name="functionDay" label="Domingo" />
                </div>   

                <div>
                    <FunctionLink label="13:45" to={seatsPath}/>
                    <FunctionLink label="15:45" to={seatsPath}/>
                    <FunctionLink label="17:45" to={seatsPath}/>
                    <FunctionLink label="19:45" to={seatsPath}/>
                    <FunctionLink label="21:45" to={seatsPath}/>
                    <FunctionLink label="23:45" to={seatsPath}/>
                </div>
            </div>
        </section>
    </Mainlayout>)
}