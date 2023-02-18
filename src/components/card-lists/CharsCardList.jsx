import { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import CharCard from "../cards/CharCard";
import "../../css/cardLists.css";

function CharsCardList () {
  const { chars } = useContext(ContentContext);

  return(
    <section className="cardList">
      { chars.results.map((char) => <CharCard key={ char.name } char={ char } />) }
    </section>   
  )
}

export default CharsCardList;
