'use client';
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "@/app/components/Preloader/Preloader";


export default function TDS() {
    const TDSGames = useGetDataByCategory(endpoints.games, "TDS")
    return(
        <main className={"main-inner"}>
            {TDSGames ? <CardsList id="TDS" title="TDS" data={TDSGames} /> : <Preloader />}
    </main>
    )
}