

import "./Seats.css"

interface SeatProps {
    number: number
}

export const Seat = ({ number }: SeatProps) => {
    return (
        <span className="SeatsRow__seat">{number}</span>
    )
}