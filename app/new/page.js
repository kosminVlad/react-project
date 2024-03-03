import { getGamesByCategory } from "../data/data-utils" 
import { CardsList } from "../components/CardsList/CardsList"
export default function New() {
    const NewGames = getGamesByCategory("new")
    return(
        <main className={"main-inner"}>
            <CardsList id="new" title="Новинки" data={NewGames}/>
        </main>
    )
}