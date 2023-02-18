import { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import CharCard from "../cards/CharCard";
import "../../css/cardLists.css";

function PlanetsCardList () {
  const { planets } = useContext(ContentContext);

  return(
    <section className="cardList">
      { planets.results.map((planet) => <h1 className="loading">{planet.name}</h1>) }
    </section>   
  )
}

export default PlanetsCardList;
