'use client';
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function Popular() {
    const PopularGames =  useGetDataByCategory(endpoints.games, "popular")
    return(
        <main className={"main-inner"}>
            {PopularGames ? <CardsList id="shooter" title="Шутеры" data={PopularGames} /> : <Preloader />}
    </main>
    )
}