'use client'

import { CardsList } from "../components/CardsList/CardsList"
import { getNormalizedGamesDataByCategory } from "../api/api-utils"
import { endpoints } from "../api/config"

export default async function New() {
    const NewGames = await getNormalizedGamesDataByCategory(endpoints.games, "new")
    console.log(NewGames)
    return(
        <main className={"main-inner"}>
            <CardsList id="new" title="Новинки" data={NewGames}/>
        </main>
    )
}