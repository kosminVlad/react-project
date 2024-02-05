import Styles from "./CardList.module.css"
import { PopularCardsFragment } from "./PopularCardsFragment" 

export const PopularCardsList = () => {
    return (
        <section ClassName={Styles["list-section"]}>
        <h2 ClassName={Styles["list-section__title"]} id="popular">
          Популярное
        </h2>
        <ul ClassName={Styles["cards-list"]}>
         <PopularCardsFragment />
        </ul>
      </section>
    )
}