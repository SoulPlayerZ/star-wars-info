import { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import PlanetCard from "../cards/PlanetCard";
import "../../css/cardLists.css";

function PlanetsCardList () {
  const { planets } = useContext(ContentContext);

  return(
    <section className="cardList">
      { planets.results.map((planet) => <PlanetCard key={ planet.name } planet={ planet } />) }
    </section>   
  )
}

export default PlanetsCardList;
