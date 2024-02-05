import Styles from "./CardList.module.css"

export const PopularCardsFragment = () => {
    return ( <>
     <li ClassName={Styles["cards-list__item"]}>
            <a href="/game-id.html" ClassName={Styles["card-list__link"]}>
              <article ClassName={Styles["card"]}>
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png"
                  alt=""
                  ClassName={Styles["card__image"]}
                />  
                <div ClassName={Styles["card__content-block"]}>
                  <h3 ClassName={Styles["card__title"]}>Crystal Kepper</h3>
                  <p ClassName={Styles["card__description"]}>
                    Управляй боевым дроном, чтобы любой ценой защитить кристалл от враждебных космо-слизней.
                  </p>
                  <div ClassName={Styles["card__info-container"]}>
                    <p ClassName={Styles["card__author"]}>
                      Автор: <span ClassName={Styles["card__accent"]}>Lonely Baobab</span>
                    </p>
                    <p ClassName={Styles["card__votes"]}>
                      Голосов на сайте: <span ClassName={Styles["card__accent"]}>20</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>

          <li ClassName={Styles["cards-list__item"]}>
            <a href="/game-id.html" ClassName={Styles["card-list__link"]}>
              <article ClassName={Styles["card"]}>
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png"
                  alt=""
                  ClassName={Styles["card__image"]}
                />
                <div ClassName={Styles["card__content-block"]}>
                  <h3 ClassName={Styles["card__title"]}>Dangeons'n'Caves. Prologue</h3>
                  <p ClassName={Styles["card__description"]}>
                    Безымянный герой исследует пещеры и подземелья, чтобы найти больше информации о себе.
                  </p>
                  <div ClassName={Styles["card__info-container"]}>
                    <p ClassName={Styles["card__author"]}>
                      Автор: <span ClassName={Styles["card__accent"]}>F-Style</span>
                    </p>
                    <p ClassName={Styles["card__votes"]}>
                      Голосов на сайте: <span ClassName={Styles["card__accent"]}>10</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          
          <li ClassName={Styles["cards-list__item"]}>
            <a href="/game-id.html" ClassName={Styles["card-list__link"]}>
              <article ClassName={Styles["card"]}>
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png"
                  alt=""
                  ClassName={Styles["card__image"]}
                />
                <div ClassName={Styles["card__content-block"]}>
                  <h3 ClassName={Styles["card__title"]}>Defence of Crystal</h3>
                  <p ClassName={Styles["card__description"]}>
                    Защищай магический кристалл от монстров и уничтожай кладбища, чтобы спасти Землю, которую поглотил мрак.
                  </p>
                  <div ClassName={Styles["card__info-container"]}>
                    <p ClassName={Styles["card__author"]}>
                      Автор: <span ClassName={Styles["card__accent"]}>MastWe</span>
                    </p>
                    <p ClassName={Styles["card__votes"]}>
                      Голосов на сайте: <span ClassName={Styles["card__accent"]}>20</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
    </>
     )
}