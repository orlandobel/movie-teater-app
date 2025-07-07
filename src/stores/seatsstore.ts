import { create } from "zustand"

export interface RowType {
    rowLetter: string
    emptySeats: number
    seats: SeatType[]
}

export interface SeatType {
    number: number
    selected: boolean
    occupied: boolean
}

interface SeatsStore {
    rows: RowType[]
    setRows: (rows: RowType[]) => void
}

export const useSeatsStore = create<SeatsStore>((set) => ({
    rows: [
        { rowLetter: "A", emptySeats: 4, seats: fakeSeats(18) },
        { rowLetter: "B", emptySeats: 4, seats: fakeSeats(18) },
        { rowLetter: "C", emptySeats: 4, seats: fakeSeats(18) },
        { rowLetter: "D", emptySeats: 4, seats: fakeSeats(18) },
        { rowLetter: "E", emptySeats: 4, seats: fakeSeats(18) },
        { rowLetter: "F", emptySeats: 4, seats: fakeSeats(18) },
        { rowLetter: "G", emptySeats: 4, seats: fakeSeats(18) },
        { rowLetter: "H", emptySeats: 4, seats: fakeSeats(18) },
        { rowLetter: "I", emptySeats: 4, seats: fakeSeats(18) },
        { rowLetter: "J", emptySeats: 4, seats: fakeSeats(18) },
        { rowLetter: "K", emptySeats: 4, seats: fakeSeats(18) },
        { rowLetter: "L", emptySeats: 4, seats: fakeSeats(18) },
        { rowLetter: "M", emptySeats: 0, seats: fakeSeats(26) },
        { rowLetter: "N", emptySeats: 0, seats: fakeSeats(26) },
        { rowLetter: "O", emptySeats: 0, seats: fakeSeats(26) },
    ],
    setRows: (rows: RowType[]) => set({ rows }),
}))

function fakeSeats(number: number) {
    return Array(number).fill(null).map((_, i) => ({ number: i + 1, selected: false, occupied: false }))
}