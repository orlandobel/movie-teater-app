import noPoster from "@assets/img/no-poster.png"
import { Link } from "react-router"

export const MovieCard = () => {
    return (
        <div className="bg-gray-300 flex flex-col rounded-[0.5rem]">
            <div className="h-[45svh] mx-4">
                <img className="aspect-[1.85/2.35]" src={noPoster} alt="" />
            </div>
            <div className="bg-blue-800 text-white flex flex-col rounded-b-[0.5rem] gap-1 px-4 py-1">
                <label className="flex justify-between">
                    <span className="font-bold">Some Large Movie Name</span>
                    <small>120min</small>
                    <small>A</small>
                </label>
                <Link className="underline text-cyan-200" to="/movie/1/foo">Comprar boletos →</Link>
            </div>
        </div>
    )
}