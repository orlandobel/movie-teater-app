import { Mainlayout } from "@/layouts/mainlayout"
import { MovieCard } from "@/components/moviecard/mooviecard"

export const HomePage = () => {
    return <>
        <Mainlayout>
            <MovieCard />
            <div className="border rounded-[8px] p-2">div 2</div>
            <div className="border rounded-[8px] p-2">div 3</div>
            <div className="border rounded-[8px] p-2">div 4</div>
            <div className="border rounded-[8px] p-2">div 5</div>
            <div className="border rounded-[8px] p-2">div 6</div>
        </Mainlayout>
    </>
}