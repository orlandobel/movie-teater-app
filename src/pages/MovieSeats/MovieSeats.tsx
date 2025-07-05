import { SeatsLayout } from "@/components/seatslayout/SeatsLayout"
import { PurchaseInfo } from "@/components/PurchaseInfo/PurchaseInfo"
import { EmptyLayout } from "@/layouts/emptylayout/emptylayout"
import "./MovieSeats.css"

export const MovieSeats = () => {
    return (<EmptyLayout className="PurchaseSeatsLayout">  
            <SeatsLayout />
            <PurchaseInfo />
    </EmptyLayout>)
}