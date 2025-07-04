import "./PurchaseInfo.css"
import noPoster from "@assets/img/no-poster.png"

export const PurchaseInfo = () => {
    return (<>
    <section className="PurchaseInfo">
            <div className="PurchaseInfo__header">
                <label>
                    Tu Carrito
                </label>
                <label>
                    $0.00
                </label>
            </div>

            <div className="PurchaseInfo__movie">
                <div className="PurchaseInfo__movie__info">
                    <div className="PurchaseInfo__movie__info__poster">
                        <img src={noPoster} alt="" />
                    </div>
                    <h2 className="PurchaseInfo__movie__info__title">Some movie name</h2>
                    <div className="PurchaseInfo__movie__info__clasification">
                        <small>Clasificación B</small>
                        <small>Duración: <b>120min</b></small>
                    </div>
                </div>
                <div className="PurchaseInfo__movie__clasification">
                    <span>B</span>
                    <p>Some clasification description</p>
                </div>
            </div>

            <div className="PurchaseInfo__purchase">
                <button className="btn btn--primary" type="button">Comprar xx boletos</button>
            </div>
       </section>
    </>)
}