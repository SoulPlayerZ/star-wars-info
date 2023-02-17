import { useContext } from "react";
import CharsContext from "../../context/CharsContext";

function CharsCardList () {
  const { chars } = useContext(CharsContext);

  return(
    chars.results.map((char) => <CharCard key={ char.name } />)
   
  )
}

export default CharsCardList;