import { useContext, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllMovies} from "../services/fetchs";
import "../css/mainPage.css";
import LoadingContext from "../context/LoadingContext";
import ContentContext from "../context/ContentContext";
import Loading from "../components/Loading";
import MoviesCardList from "../components/card-lists/MoviesCardList";


function MoviesPage () {
  const { movies, setMovies } = useContext(ContentContext);
  const { loading, setLoading } = useContext(LoadingContext);

  const getMovies = async () => {
    setLoading(!loading);
    const allMovies = await getAllMovies();
    setMovies(allMovies);
    setLoading(!loading);
  }

  useEffect(() => {
    getMovies();
  }, [])
  
  return(
    <section className="mainPage">
    <Header />
      {movies.results === undefined ? <Loading /> : <MoviesCardList />}
    <Footer />
  </section>
  )
}

export default MoviesPage;