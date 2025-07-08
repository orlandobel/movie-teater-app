import { Button } from "@components/buttons/Button"
import noPoster from "@assets/img/no-poster.png"
import { Card } from "@components/Card/Card"
import { CardHeader } from "@components/Card/Header/CardHeader"
import { CardBody } from "@/components/Card/Body/CardBody"
import { CardFooter } from "@components/Card/Footer/CardFooter"
import { useNavigate } from "react-router"
import type { Movie } from "@/stores/moviesstore"
import "./PurchaseInfo.css"

interface PurchaseInfoProps {
    movie?: Movie
}

export const PurchaseInfo = ({ movie }: PurchaseInfoProps) => {
    const navigate = useNavigate()
    
    return (<Card className="PurchaseInfo">
            <CardHeader>
                <label>
                    Tu Carrito
                </label>
                <label>
                    $0.00
                </label>
            </CardHeader>

            <CardBody className="PurchaseInfo__movie">
                <figure className="PurchaseInfo__movie__info">
                    <img className="PurchaseInfo__movie__info__poster" src={movie?.poster || noPoster} alt="" />
                    
                    <figcaption className="PurchaseInfo__movie__info__info">
                        <h2 className="PurchaseInfo__movie__info__title">{movie?.title}</h2>
                        <div className="PurchaseInfo__movie__info__clasification">
                            <small>Clasificación {movie?.classification}</small>
                            <small>Duración: <b>{movie?.duration}min</b></small>
                        </div>
                    </figcaption>
                </figure>
                
                <div className="PurchaseInfo__movie__clasification">
                    <span>{movie?.classification}</span>
                    <p>Some clasification description</p>
                </div>
            </CardBody>

            <CardFooter className="PurchaseInfo__purchase">
                <Button buttonType="primary" onClick={() => navigate("/purchase-success")}>Comprar xx boletos</Button>
            </CardFooter>
       </Card>)
}