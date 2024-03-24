'use client';
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function Popular() {
    const PopularGames =  useGetDataByCategory(endpoints.games, "popular")
    return(
        <main className={"main-inner"}>
            {PopularGames ? <CardsListSection id="shooter" title="Шутеры" data={PopularGames} /> : <Preloader />}
    </main>
    )
}