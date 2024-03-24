'use client';
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "@/app/components/Preloader/Preloader";
export default function Runner() {
    const RunnerGames = useGetDataByCategory(endpoints.games, "runner")
    return(
        <main className={"main-inner"}>
{RunnerGames ? <CardsList id="runner" title="Раннеры" data={RunnerGames} /> : <Preloader />}
    </main>
    )
}