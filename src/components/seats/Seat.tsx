import { useState } from "react"
import "./Seats.css"

interface SeatProps {
    number: number
}

export const Seat = ({ number }: SeatProps) => {
    const [selected, setSelected] = useState(false)

    const className = `SeatsRow__seat ${selected ? "SeatsRow__seat--selected" : ""}`

    const handleClick = () => {
        setSelected(!selected)
    }

    return (
        <span className={className} onClick={handleClick}>{number}</span>
    )
}