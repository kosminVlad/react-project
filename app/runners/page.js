import { CardsList } from "../components/CardsList/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";

export default async function Runner() {
    const RunnerGames = await getNormalizedGamesDataByCategory(endpoints.games, "runner")
    return(
        <CardsList id="runner" title="РАНЕРЫ" data={RunnerGames}/>
    )
}