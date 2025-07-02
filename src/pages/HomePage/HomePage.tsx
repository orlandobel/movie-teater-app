import { Mainlayout } from "@/layouts/mainlayout"
import { MovieCard } from "@/components/moviecard/moviecard"
import "./HomePage.css"

export const HomePage = () => {
    return <>
        <Mainlayout className="HomePage">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </Mainlayout>
    </>
}