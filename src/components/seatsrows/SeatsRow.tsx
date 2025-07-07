import { Seat } from "@/components/seats/Seat"
import "./SeatsRow.css"

interface SeatsRowProps {
    rowLetter: string
    emptySeats: number
    seats: number
}

export const SeatsRow = ({ rowLetter, emptySeats, seats }: SeatsRowProps) => {
    const emptySeatsArray = Array.from({ length: emptySeats }, (_, i) => <span key={i}></span>)
    const seatsArray = Array.from({ length: seats }, (_, i) => 
        <Seat key={i} number={i + 1} />)
    
    return (
        <div className="SeatsRow">
            <span>{rowLetter}</span>
            {emptySeatsArray}
            {seatsArray}
        </div>
    )
}