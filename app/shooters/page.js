'use client';
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default  function Shooter() {
    const ShooterGames = useGetDataByCategory(endpoints.games, "shooter")
    return(
        <main className={"main-inner"}>
            {ShooterGames ? <CardsListSection id="shooter" title="Шутеры" data={ShooterGames} /> : <Preloader />}
    </main>
    )
}