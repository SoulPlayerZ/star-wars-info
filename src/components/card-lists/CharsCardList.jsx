import { useContext } from "react";
import CharsContext from "../../context/CharsContext";
import CharCard from "../cards/CharCard";
import "../../css/cardLists.css";

function CharsCardList () {
  const { chars } = useContext(CharsContext);

  return(
    <section className="cardList">
      { chars.results.map((char) => <CharCard key={ char.name } char={ char } />) }
    </section>   
  )
}

export default CharsCardList;