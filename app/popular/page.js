import { CardsList } from "../components/CardsList/CardsList";
import { getGamesByCategory } from "../data/data-utils";

export default function Popular() {
    const PopularGames = getGamesByCategory("popular")
    return(
        <CardsList id="popular" title="Популярное" data={PopularGames}/>
    )
}