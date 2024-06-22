import "./portfolio.css";
import portfolio from "../../assets/Portfolio.png";

import card1 from "../../assets/card1.png";

import Card from "../portfolio/card/Card";
const cardData = [
  {
    id: 1,
    projectName: "Eventos Premium",
    projectDescription: "Elegante - Serio - Estatus",
    projectImage: card1,
  },
  {
    id: 2,
    projectName: "Mi Portal U",
    projectDescription: "Amigable - Dashboard - Simple",
    projectImage: card1,
  },
  {
    id: 3,
    projectName: "A&C App",
    projectDescription: "Elegante - Serio - Estatus",
    projectImage: card1,
  },
];

export default function Portfolio() {
  const renderedCard = cardData.map((card) => {
    return <Card key={card.id} {...card} />;
  });

  return (
    <>
      <section className="portfolio">
        <div className="portfolio-pic">
          <img src={portfolio} alt="portfolio text" />
        </div>
        <hr className="hr-portfolio " />

        <div className="work">{renderedCard}</div>
      </section>
    </>
  );
}
