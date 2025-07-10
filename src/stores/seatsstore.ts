import { create } from "zustand"

export interface RowType {
    rowLetter: string
    emptySeats: number
    seats: SeatType[]
}

export interface SeatType {
    id: string
    number: number
    selected: boolean
    occupied: boolean
}

interface SeatsStore {
    rows: RowType[]
    setRows: (rows: RowType[]) => void
    selectedSeats: number[]
    setSelectedSeats: (selectedSeats: number[]) => void
}

export const useSeatsStore = create<SeatsStore>((set) => ({
    rows: [
        { rowLetter: "A", emptySeats: 4, seats: fakeSeats("A", 18) },
        { rowLetter: "B", emptySeats: 4, seats: fakeSeats("B", 18) },
        { rowLetter: "C", emptySeats: 4, seats: fakeSeats("C", 18) },
        { rowLetter: "D", emptySeats: 4, seats: fakeSeats("D", 18) },
        { rowLetter: "E", emptySeats: 4, seats: fakeSeats("E", 18) },
        { rowLetter: "F", emptySeats: 4, seats: fakeSeats("F", 18) },
        { rowLetter: "G", emptySeats: 4, seats: fakeSeats("G", 18) },
        { rowLetter: "H", emptySeats: 4, seats: fakeSeats("H", 18) },
        { rowLetter: "I", emptySeats: 4, seats: fakeSeats("I", 18) },
        { rowLetter: "J", emptySeats: 4, seats: fakeSeats("J", 18) },
        { rowLetter: "K", emptySeats: 4, seats: fakeSeats("K", 18) },
        { rowLetter: "L", emptySeats: 4, seats: fakeSeats("L", 18) },
        { rowLetter: "M", emptySeats: 0, seats: fakeSeats("M", 26) },
        { rowLetter: "N", emptySeats: 0, seats: fakeSeats("N", 26) },
        { rowLetter: "O", emptySeats: 0, seats: fakeSeats("O", 26) },
    ],
    setRows: (rows: RowType[]) => set({ rows }),
    selectedSeats: [],
    setSelectedSeats: (selectedSeats: number[]) => set({ selectedSeats })
}))

function fakeSeats(row: string, number: number): SeatType[] {
    return Array(number).fill(null).map((_, i) => ({ id: `${row}${i + 1}`, number: i + 1, selected: false, occupied: getRandomBoolean() }))
}

function getRandomBoolean(): boolean {
    return Math.random() < 0.5;
}