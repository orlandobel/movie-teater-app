import { Mainlayout } from "@/layouts/mainlayout"
import noPoster from "@assets/img/no-poster.png"
import { Link } from "react-router"

export const MoovieDetails = () => {
    return (<>
        <Mainlayout className="flex gap-12 py-8 px-[18svw]">
            <section className=" rounded-[1rem] h-[60svh] aspect-[1.85/2.35] bg-gray-300">
                <img className="aspect-[1.85/2.35]" src={noPoster} alt="" />
            </section>

            <section className="flex flex-col gap-4 justify-between py-32">  
                <div className="flex flex-col gap-2 items-center">
                    <h1>Some movie name</h1>
                    <div className="flex gap-2">
                        <small>120min</small>
                        <small>A</small>
                    </div>
                </div>

                <div className="flex flex-col gap-6 text-center">
                    <h2>Semana 01/07/2025 - 08/07/2025</h2>
                    <ul className="flex gap-6">
                        <li><a href="">Lunes</a></li>
                        <li><a href="">Martes</a></li>
                        <li><a href="">Miercoles</a></li>
                        <li><a href="">Jueves</a></li>
                        <li><a href="">Viernes</a></li>
                        <li className="text-blue-700 underline font-bold"><a href="">Sabado</a></li>
                        <li><a href="">Domingo</a></li>
                    </ul>   

                    <ul className="flex gap-6">
                        <li><Link className="text-sky-400 font-bold" to="">13:45</Link></li>
                        <li><Link className="text-sky-400 font-bold" to="">15:45</Link></li>
                        <li><Link className="text-sky-400 font-bold" to="">17:45</Link></li>
                        <li><Link className="text-sky-400 font-bold" to="">19:45</Link></li>
                        <li><Link className="text-sky-400 font-bold" to="">21:45</Link></li>
                        <li><Link className="text-blue-700 font-bold" to="">23:45</Link></li>
                    </ul>
                </div>
            </section>
        </Mainlayout>
    </>)
}