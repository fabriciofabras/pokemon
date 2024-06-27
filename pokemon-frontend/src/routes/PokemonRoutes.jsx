import { Route, Routes } from "react-router-dom"
import { AllPokemon } from "../pages/AllPokemon"
import { Pokemon } from "../pages/Pokemon"
import { SearchPokemon } from "../pages/SearchPokemon"
import { NavBar } from "../ui/components/NavBar"

export const PokemonRoutes = () => {
    return(
        <>
        <NavBar/>
        <div className="container">
            <Routes>
                <Route path="all" element={<AllPokemon/>}></Route>
                <Route path="search" element={<SearchPokemon/>}></Route>
                <Route path="pokemon" element={<Pokemon/>}></Route>
                <Route path="/" element={<AllPokemon/>}></Route>
            </Routes>
        </div>
        </>
    )
}