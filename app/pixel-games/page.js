'use client';
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "@/app/components/Preloader/Preloader";


export default  function pixel() {
    const PixelGames =  useGetDataByCategory(endpoints.games, "pixel")
    return(
        <main className={"main-inner"}>
            {PixelGames ? <CardsList id="pixel" title="Пиксельные" data={PixelGames} /> : <Preloader />}
        </main>
    )
}