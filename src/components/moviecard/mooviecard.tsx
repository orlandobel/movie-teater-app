import noPoster from "@assets/img/no-poster.png"

export const MovieCard = () => {
    return (
        <div className="bg-white flex flex-col rounded-[0.5rem]">
            <img className="mx-4 aspect-[1.85/2.35] h-[35svh]" src={noPoster} alt="" />
            <div className="bg-sky-700 text-white flex flex-col rounded-b-[0.5rem] gap-1 px-4 py-1">
                <label className="flex justify-between">
                    <span className="font-bold">Some Large Movie Name</span>
                    <small>120min</small>
                    <small>A</small>
                </label>
                <a className="">Comprar boletos →</a>
            </div>
        </div>
    )
}