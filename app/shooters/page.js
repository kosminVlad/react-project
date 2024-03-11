import { CardsList } from "../components/CardsList/CardsList";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";

export default async function Shooter() {
    const ShooterGames = await await getNormalizedGamesDataByCategory(endpoints.games, "shooter")
    return(
        <CardsList id="shooter" title="ШУТЕРЫ" data={ShooterGames}/>
    )
}