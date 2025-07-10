import { Mainlayout } from "@/layouts/mainlayout"
import noPoster from "@assets/img/no-poster.png"
import { FunctionCheckbox } from "@components/function/FunctionCheckbox/FunctionCheckbox"
import { FunctionLink } from "@components/function/FunctionLink/FunctionLink"
import { useMovieStore, type Movie, staticMovies } from "@/stores/moviesstore"
import { useParams, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { weekStart, weekEnd, format } from "@formkit/tempo"
import "./MovieDetails.css"

export const MoovieDetails = () => {
    const [movie, setMovie] = useState<Movie | undefined>(undefined)
    const [functionDay, setFunctionDay] = useState<string | undefined>(undefined)

    const { id } = useParams()
    const { movies } = useMovieStore()
    const setMovies = useMovieStore((state) => state.setMovies)
    const navigate = useNavigate()

    const seatsPath = `/movie/${id}/${movie?.title}/seats`
    
    useEffect(() => {
        setMovies(staticMovies())
    }, [])    

    useEffect(() => {
        setMovie(movies.find(movie => movie.id === Number(id)))
    }, [movies])

    const onDayClick = (day: string) => {
        setFunctionDay(day)
    }

    const onFunctionClick = () => {
        if (!functionDay) {
            window.alert("Por favor, selecciona un dia")
            return
        }

        navigate(seatsPath)
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
                <h2>Semana {getWeek()}</h2>

                <div>
                    <FunctionCheckbox onClick={() => onDayClick("Domingo")} name="functionDay" label="Domingo" />
                    <FunctionCheckbox onClick={() => onDayClick("Lunes")} name="functionDay" label="Lunes" />
                    <FunctionCheckbox onClick={() => onDayClick("Martes")} name="functionDay" label="Martes" />
                    <FunctionCheckbox onClick={() => onDayClick("Miercoles")} name="functionDay" label="Miercoles" />
                    <FunctionCheckbox onClick={() => onDayClick("Jueves")} name="functionDay" label="Jueves" />
                    <FunctionCheckbox onClick={() => onDayClick("Viernes")} name="functionDay" label="Viernes" />
                    <FunctionCheckbox onClick={() => onDayClick("Sabado")} name="functionDay" label="Sabado" />
                </div>   

                <div>
                    <FunctionLink label="13:45" onClick={onFunctionClick}/>
                    <FunctionLink label="15:45" onClick={onFunctionClick}/>
                    <FunctionLink label="17:45" onClick={onFunctionClick}/>
                    <FunctionLink label="19:45" onClick={onFunctionClick}/>
                    <FunctionLink label="21:45" onClick={onFunctionClick}/>
                    <FunctionLink label="23:45" onClick={onFunctionClick}/>
                </div>
            </div>
        </section>
    </Mainlayout>)
}

const getWeek = () => {
    const today = new Date()

    const wsRaw = weekStart(today)
    const weRaw = weekEnd(today)

    const ws = format(wsRaw, "short")
    const we = format(weRaw, "short")

    return `${ws} - ${we}`
}