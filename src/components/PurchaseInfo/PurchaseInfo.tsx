import { Button } from "@components/buttons/Button"
import noPoster from "@assets/img/no-poster.png"
import "./PurchaseInfo.css"

export const PurchaseInfo = () => {
    return (<>
    <section className="PurchaseInfo">
            <header className="PurchaseInfo__header">
                <label>
                    Tu Carrito
                </label>
                <label>
                    $0.00
                </label>
            </header>

            <article className="PurchaseInfo__movie">
                <figure className="PurchaseInfo__movie__info">
                    <img className="PurchaseInfo__movie__info__poster" src={noPoster} alt="" />
                    {/*<div className="PurchaseInfo__movie__info__poster">
                    </div>*/}
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
            </article>

            <div className="PurchaseInfo__purchase">
                <Button buttonType="primary">Comprar xx boletos</Button>
            </div>
       </section>
    </>)
}