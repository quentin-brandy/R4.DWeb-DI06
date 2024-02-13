import List from "./list";

export default function All({ title, description, formules }) {
    return (
        <section>
            <div class="offer">
                <div class="offer-section">
                    <h2 class="offer-section__title">{title}</h2>
                    <p class="offer-section__description">{description}</p>
                        <div class="box">
                        {formules.map((formule, index) => (
                            <ul  key={index} class="offer-box">
                                <li>
                                    <h3 class="offer-box__name">{formule.formule}</h3>
                                    <p class="offer-box__price">{formule.prix}</p>
                                </li>
                                {formule.advantages.map((advantage, idx) => (
                                    <List key={idx} text={advantage.text} checked={advantage.checked} />
                                ))}
                                <li><a href={formule.link}class="header__lien"><button class="header__button btn--hero__nav"> {formule.button}</button></a> 
                               </li>
                            </ul>
                              ))}
                        </div>
                </div>
            </div>
        </section>
    );
}



     /* <section>
        <header className="team__header">
          <h2 className="team__title">{title}</h2>
        </header>
        <section className="team__content">
          <h1 className="team__heading">{description}</h1>
          <p className="team__description">{description}</p>
        </section>
        <ul className="gallery">
          {employees.map((employe, index) => (
            <Card key={index} name={employe.name} photo={employe.photo} work={employe.work} />
          ))}
        </ul>
      </section>*/
   