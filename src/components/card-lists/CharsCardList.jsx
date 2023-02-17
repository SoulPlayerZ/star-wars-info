import { useContext } from "react";
import CharsContext from "../../context/CharsContext";
import CharCard from "../cards/CharCard";

function CharsCardList () {
  const { chars } = useContext(CharsContext);

  return(
    chars.results.map((char) => <CharCard key={ char.name } char={ char } />)
   
  )
}

export default CharsCardList;