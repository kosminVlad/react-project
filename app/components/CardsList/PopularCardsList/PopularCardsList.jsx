import { PopularCardsFragment } from "./PopularCardsFragment" 

export const PopularCardsList = () => {
    return (
<section class="list-section">
        <h2 class="list-section__title" id="popular">
          Популярное
        </h2>
        <ul class="cards-list">
          <PopularCardsFragment />
        </ul>
      </section>
    )
}