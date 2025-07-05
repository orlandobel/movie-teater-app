import { Button } from "@components/buttons/Button"
import noPoster from "@assets/img/no-poster.png"
import { Card } from "@components/Card/Card"
import { CardHeader } from "@components/Card/Header/CardHeader"
import { CardBody } from "@/components/Card/Body/CardBody"
import { CardFooter } from "@components/Card/Footer/CardFooter"
import { useNavigate } from "react-router"
import "./PurchaseInfo.css"

export const PurchaseInfo = () => {
    const navigate = useNavigate()
    
    return (<Card>
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
                    <img className="PurchaseInfo__movie__info__poster" src={noPoster} alt="" />
                    
                    <figcaption className="PurchaseInfo__movie__info__info">
                        <h2 className="PurchaseInfo__movie__info__title">Some movie name</h2>
                        <div className="PurchaseInfo__movie__info__clasification">
                            <small>Clasificación B</small>
                            <small>Duración: <b>120min</b></small>
                        </div>
                    </figcaption>
                </figure>
                
                <div className="PurchaseInfo__movie__clasification">
                    <span>B</span>
                    <p>Some clasification description</p>
                </div>
            </CardBody>

            <CardFooter className="PurchaseInfo__purchase">
                <Button buttonType="primary" onClick={() => navigate("/purchase-success")}>Comprar xx boletos</Button>
            </CardFooter>
       </Card>)
}