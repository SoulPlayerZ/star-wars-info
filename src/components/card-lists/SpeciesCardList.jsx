import { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import SpecieCard from "../cards/SpecieCard";
import "../../css/cardLists.css";

function SpeciesCardList () {
  const { species } = useContext(ContentContext);

  return(
    <section className="cardList">
      { species.results.map((species) => <SpecieCard key={ species.name } species={ species } />) }
    </section>   
  )
}

export default SpeciesCardList;
