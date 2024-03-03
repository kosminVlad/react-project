import { CardsList } from "../components/CardsList/CardsList";
import { getGamesByCategory } from "../data/data-utils";

export default function pixel() {
    const PixelGames = getGamesByCategory("pixel")
    return(
        <CardsList id="pixel" title="Пиксельные" data={PixelGames}/>
    )
}