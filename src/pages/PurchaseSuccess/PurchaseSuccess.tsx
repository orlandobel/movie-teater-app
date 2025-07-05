import { EmptyLayout } from "@/layouts/emptylayout/emptylayout"
import { Card } from "@/components/Card/Card"
import { CardBody } from "@/components/Card/Body/CardBody"
import { Button } from "@/components/buttons/Button"
import "./PurchaseSuccess.css"
import { useNavigate } from "react-router"

export const PurchaseSuccess = () => {
    const navigate = useNavigate()
    
    return (<EmptyLayout className="PurchaseSuccessLayout">
        <Card>
            <CardBody className="PurchaseSuccessLayout__Card__Body">
                <h2>Gracias por tu compra</h2>
                <p>Tus boletos serán enviados a tu correo electrónico</p>
                <Button buttonType="primary" onClick={() => navigate("/")}>Regresar</Button>
            </CardBody>
        </Card>
    </EmptyLayout>)
}
