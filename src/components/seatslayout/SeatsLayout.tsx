import { SeatsRow } from "@/components/seatsrows/SeatsRow"
import { useSeatsStore } from "@/stores/seatsstore"
import { type RowType } from "@/stores/seatsstore"
import "./SeatsLayout.css"

interface SeatsLayoutProps {
    className?: string
}

export const SeatsLayout = ({ className }: SeatsLayoutProps) => {
    const { rows, setRows, selectedSeats, setSelectedSeats } = useSeatsStore()

    function onClickSeat(row: number, seat: number) {
        console.log(row, seat)
        rows[row].seats[seat].selected = !rows[row].seats[seat].selected
        setRows(rows)

        if (rows[row].seats[seat].selected) {
            setSelectedSeats([...selectedSeats, seat])
        } else {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat))
        }
    }
    
    return (
        <section className={className}>
            <div className="legend"></div>
            <div className="SeatsLayout">
                <span className="SeatsLayout__screen">Pantalla</span>

                <div></div>

                {rows.map((row: RowType, index: number) => (
                    <SeatsRow key={index} index={index} row={row} onClickSeat={onClickSeat} />
                ))}
            </div>
        </section>
    )
}