'use client';
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default  function Shooter() {
    const ShooterGames = useGetDataByCategory(endpoints.games, "shooter")
    return(
        <main className={"main-inner"}>
            {ShooterGames ? <CardsList id="shooter" title="Шутеры" data={ShooterGames} /> : <Preloader />}
    </main>
    )
}