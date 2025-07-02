import { Mainlayout } from "@/layouts/mainlayout"
import { MovieCard } from "@/components/moviecard/mooviecard"

export const HomePage = () => {
    return <>
        <Mainlayout className="grid grid-cols-4 gap-6 px-[18svw] py-8">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </Mainlayout>
    </>
}