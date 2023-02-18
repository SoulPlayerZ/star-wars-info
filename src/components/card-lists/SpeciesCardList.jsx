import { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import SpecieCard from "../cards/SpecieCard";
import "../../css/cardLists.css";

function SpeciesCardList () {
  const { species } = useContext(ContentContext);

  return(
    <section className="cardList">
      { species.results.map((specie) => <SpecieCard key={ specie.name } specie={ specie } />) }
    </section>   
  )
}

export default SpeciesCardList;
