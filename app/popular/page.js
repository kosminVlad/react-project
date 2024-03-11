import { CardsList } from "../components/CardsList/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";

export default async function Popular() {
    const PopularGames = await getNormalizedGamesDataByCategory(endpoints.games, "popular")
    return(
        <CardsList id="popular" title="Популярное" data={PopularGames}/>
    )
}