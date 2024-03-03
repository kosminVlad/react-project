import { CardsList } from "../components/CardsList/CardsList";
import { getGamesByCategory } from "../data/data-utils";

export default function Shooter() {
    const ShooterGames = getGamesByCategory("shooter")
    return(
        <CardsList id="shooter" title="ШУТЕРЫ" data={ShooterGames}/>
    )
}