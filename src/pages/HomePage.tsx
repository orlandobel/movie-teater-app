import { Mainlayout } from "@/layouts/mainlayout"
import { MovieCard } from "@/components/moviecard/mooviecard"

export const HomePage = () => {
    return <>
        <Mainlayout>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </Mainlayout>
    </>
}