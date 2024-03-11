import { CardsList } from "../components/CardsList/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";

export default async function TDS() {
    const TDSGames = await getNormalizedGamesDataByCategory(endpoints.games, "TDS")
    return(
        <CardsList id="TDS" title="TDS" data={TDSGames}/>
    )
}