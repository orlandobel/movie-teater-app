import { type SeatType } from "@/stores/seatsstore"
import "./Seats.css"

interface SeatProps {
    index: number
    seat: SeatType,
    onClickSeat: (index: number) => void
}

export const Seat = ({ index, seat, onClickSeat }: SeatProps) => {
    const className = `SeatsRow__seat ${seat.selected ? "SeatsRow__seat--selected" : ""} ${seat.occupied ? "SeatsRow__seat--occupied" : ""}`

    return (
        <span className={className} onClick={() => onClickSeat(index)}>{seat.number}</span>
    )
}