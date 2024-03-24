'use client';
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";


export default  function pixel() {
    const PixelGames =  useGetDataByCategory(endpoints.games, "pixel")
    return(
        <main className={"main-inner"}>
            {PixelGames ? <CardsListSection id="pixel" title="Пиксельные" data={PixelGames} /> : <Preloader />}
        </main>
    )
}