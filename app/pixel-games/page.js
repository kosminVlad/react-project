import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { CardsList } from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";

export default async function pixel() {
    const PixelGames = await getNormalizedGamesDataByCategory(endpoints.games, "pixel")
    return(
        <CardsList id="pixel" title="Пиксельные" data={PixelGames}/>
    )
}