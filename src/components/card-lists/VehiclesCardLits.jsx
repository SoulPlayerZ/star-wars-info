import { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import VehicleCard from "../cards/VehicleCard";
import "../../css/cardLists.css";

function VehiclesCardList () {
  const { vehicles } = useContext(ContentContext);

  return(
    <section className="cardList">
      { vehicles.results.map((vehicles) => <VehicleCard key={ vehicles.name } vehicles={ vehicles } />) }
    </section>   
  )
}

export default VehiclesCardList;
