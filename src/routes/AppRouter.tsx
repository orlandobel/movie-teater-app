import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "@/pages/HomePage/HomePage"
import { MoovieDetails } from "@/pages/MovieDetails/MovieDetails"
import { MovieSeats } from "@/pages/MovieSeats/MovieSeats"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movie/:id/:name" element={<MoovieDetails />} />
                <Route path="/movie/:id/:name/seats" element={<MovieSeats />} />
            </Routes>
        </BrowserRouter>
    )
}