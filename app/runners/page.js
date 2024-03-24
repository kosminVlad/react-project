'use client';
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";
export default function Runner() {
    const RunnerGames = useGetDataByCategory(endpoints.games, "runner")
    return(
        <main className={"main-inner"}>
{RunnerGames ? <CardsListSection id="runner" title="Раннеры" data={RunnerGames} /> : <Preloader />}
    </main>
    )
}