import { SeatsLayout } from "@/components/seatslayout/SeatsLayout"
import { PurchaseInfo } from "@/components/PurchaseInfo/PurchaseInfo"
import "./MovieSeats.css"

export const MovieSeats = () => {
    return (<>  
       <SeatsLayout />
       <PurchaseInfo />
    </>)
}