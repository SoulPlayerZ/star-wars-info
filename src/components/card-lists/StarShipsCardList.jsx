import { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import StarShipCard from "../cards/StarShipCard";
import "../../css/cardLists.css";

function StarShipsCardList () {
  const { starShips } = useContext(ContentContext);

  return(
    <section className="cardList">
      { starShips.results.map((starShip) => <StarShipCard key={ starShip.name } starShip={ starShip } />) }
    </section>   
  )
}

export default StarShipsCardList;
