import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Movie {
    id: number
    title: string
    duration: number
    poster: string
    classification: string
}

interface MovieStoreState {
    movies: Movie[],
}

interface MovieStoreActions {
    setMovies: (movies: Movie[]) => void,
}

type MovieStore = MovieStoreState & MovieStoreActions 

export const useMovieStore = create<MovieStore>()(
    persist(
        (set) => ({
            movies: [],
            setMovies: (movies: Movie[]) => set({ movies })
        }), 
        { name: "movies-storage" }
    )
)

export function staticMovies() {
    return [
        {
            id: 1,
            title: "Jurasic World",
            duration: 134,
            poster: "https://tickets-static-content.cinepolis.com/pimcore/4752/assets/Mexico/Tickets/Movies/JurassicWorldRenace/Es/20_POSTER_720X1022/resource.jpg",
            classification: "B"
        },
        {
            id: 2,
            title: "F1",
            duration: 155,
            poster: "https://tickets-static-content.cinepolis.com/pimcore/4324/assets/Mexico/Tickets/Movies/F1/Es/f1_720x1022_3/resource.jpg",
            classification: "B"
        },
        {
            id: 3,
            title: "Infierno en el pantano",
            duration: 87,
            poster: "https://tickets-static-content.cinepolis.com/pimcore/3803/assets/Mexico/Tickets/Movies/InfiernoEnElPantano/Es/P_ster_720x1022px_/resource.jpg",
            classification: "TBC"
        },
        {
            id: 4,
            title: "Como entrenar a tu dragón",
            duration: 126,
            poster: "https://tickets-static-content.cinepolis.com/pimcore/4046/assets/Mexico/Tickets/Movies/ComoEntrenarATuDragon/Es/20_Poster_720x1022px_POSTER/resource.jpg",
            classification: "A"
        },
        {
            id: 5,
            title: "Bailarina",
            duration: 125,
            poster: "https://tickets-static-content.cinepolis.com/pimcore/2760/assets/Mexico/Tickets/Movies/Bailarina/Es/P_ster_720x1022px_/resource.jpg",
            classification: "C"
        }
    ]
}
