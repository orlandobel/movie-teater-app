import { SeatsRow } from "@/components/seatsrows/SeatsRow"
import { useSeatsStore } from "@/stores/seatsstore"
import { type RowType } from "@/stores/seatsstore"
import "./SeatsLayout.css"

interface SeatsLayoutProps {
    className?: string
}

export const SeatsLayout = ({ className }: SeatsLayoutProps) => {
    const { rows } = useSeatsStore()
    const { setRows } = useSeatsStore()

    function onClickSeat(row: number, seat: number) {
        console.log(row, seat)
        rows[row].seats[seat].selected = !rows[row].seats[seat].selected
        setRows(rows)
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