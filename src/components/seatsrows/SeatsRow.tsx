import { type RowType } from "@/stores/seatsstore"
import { type SeatType } from "@/stores/seatsstore"
import { Seat } from "@/components/seats/Seat"
import "./SeatsRow.css"

interface SeatsRowProps {
    index: number
    row: RowType
    onClickSeat: (row: number, seat: number) => void
}

export const SeatsRow = ({ index, row, onClickSeat }: SeatsRowProps) => {
    const emptySeatsArray = Array.from({ length: row.emptySeats }, (_, i) => <span key={i}></span>)
    const seatsArray = row.seats.map((seat: SeatType, i: number) => 
        <Seat key={i} index={i} seat={seat} onClickSeat={handleOnClickSeat} />)


    function handleOnClickSeat(seat: number) {
        onClickSeat(index, seat)
    }
    
    return (
        <div className="SeatsRow">
            <span>{row.rowLetter}</span>
            {emptySeatsArray}
            {seatsArray}
        </div>
    )
}