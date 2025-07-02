import { Mainlayout } from "@/layouts/mainlayout"
import noPoster from "@assets/img/no-poster.png"
import "./MovieDetails.css"
import { FunctionCheckbox } from "@components/function/FunctionCheckbox/FunctionCheckbox"
import { FunctionLink } from "@components/function/FunctionLink/FunctionLink"

export const MoovieDetails = () => {
    return (<>
        <Mainlayout className="MovieDetails">
            <section className="MovieDetails__poster">
                <img src={noPoster} alt="" />
            </section>

            <section className="MovieDetails__info">  
                <div className="MovieDetails__info__MovieInfo">
                    <h1>Some movie name</h1>
                    <div>
                        <small>120min</small>
                        <small>A</small>
                    </div>
                </div>

                <div className="MovieDetails__info__FunctionInfo">
                    <h2>Semana 01/07/2025 - 08/07/2025</h2>

                    <div>
                        <FunctionCheckbox label="Lunes" />
                        <FunctionCheckbox label="Martes" />
                        <FunctionCheckbox label="Miercoles" />
                        <FunctionCheckbox label="Jueves" />
                        <FunctionCheckbox label="Viernes" />
                        <FunctionCheckbox label="Sabado" />
                        <FunctionCheckbox label="Domingo" />
                    </div>   

                    <div>
                        <FunctionLink label="13:45" to=""/>
                        <FunctionLink label="15:45" to=""/>
                        <FunctionLink label="17:45" to=""/>
                        <FunctionLink label="19:45" to=""/>
                        <FunctionLink label="21:45" to=""/>
                        <FunctionLink label="23:45" to=""/>
                    </div>
                </div>
            </section>
        </Mainlayout>
    </>)
}