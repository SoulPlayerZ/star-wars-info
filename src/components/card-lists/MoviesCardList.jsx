import { useContext } from "react";
import ContentContext from "../../context/ContentContext";
import MovieCard from "../cards/MovieCard";
import "../../css/cardLists.css";

function MoviesCardList () {
  const { movies } = useContext(ContentContext);

  return(
    <section className="cardList">
      { movies.results.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
    </section>   
  )
}

export default MoviesCardList;
