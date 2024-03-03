import { CardsList } from "../components/CardsList/CardsList";
import { getGamesByCategory } from "../data/data-utils";

export default function Runner() {
    const RunnerGames = getGamesByCategory("runner")
    return(
        <CardsList id="runner" title="РАНЕРЫ" data={RunnerGames}/>
    )
}