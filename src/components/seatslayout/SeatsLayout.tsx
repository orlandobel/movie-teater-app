import { SeatsRow } from "@/components/seats/SeatsRow"
import "./SeatsLayout.css"

interface SeatsLayoutProps {
    className?: string
}

export const SeatsLayout = ({ className }: SeatsLayoutProps) => {
    return (
        <section className={className}>
            <div className="legend"></div>
            <div className="SeatsLayout">
                <span className="SeatsLayout__screen">Pantalla</span>

                <div></div>

                <SeatsRow rowLetter="A" emptySeats={4} seats={18} />
                <SeatsRow rowLetter="B" emptySeats={4} seats={18} />
                <SeatsRow rowLetter="C" emptySeats={4} seats={18} />
                <SeatsRow rowLetter="D" emptySeats={4} seats={18} />
                <SeatsRow rowLetter="E" emptySeats={4} seats={18} />
                <SeatsRow rowLetter="F" emptySeats={4} seats={18} />
                <SeatsRow rowLetter="G" emptySeats={4} seats={18} />
                <SeatsRow rowLetter="H" emptySeats={4} seats={18} />
                <SeatsRow rowLetter="I" emptySeats={4} seats={18} />
                <SeatsRow rowLetter="J" emptySeats={4} seats={18} />
                <SeatsRow rowLetter="K" emptySeats={4} seats={18} />
                <SeatsRow rowLetter="L" emptySeats={4} seats={18} />
                <SeatsRow rowLetter="M" emptySeats={0} seats={26} />
                <SeatsRow rowLetter="N" emptySeats={0} seats={26} />
                <SeatsRow rowLetter="O" emptySeats={0} seats={26} />
            </div>
        </section>
    )
}