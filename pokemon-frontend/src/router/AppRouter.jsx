import { PokemonRoutes } from "../routes/PokemonRoutes"

export const AppRouter = () =>{
    return (
        <>
        <Routes>
            <Route path="/*" element={<PokemonRoutes/>}/>
        </Routes>
        </>
    )
}