import { NewCardsFragment } from "./NewCardsFragment"

export const NewCardsList = () => {
    return (
      <section class="list-section">
      <h2 class="list-section__title" id="new">
        Новинки
      </h2>
      <ul class="cards-list">
      <NewCardsFragment />
      </ul>
    </section>
      
  )
}