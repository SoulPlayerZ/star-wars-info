import { useContext, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllStarShips } from "../services/fetchs";
import "../css/mainPage.css";
import LoadingContext from "../context/LoadingContext";
import ContentContext from "../context/ContentContext";
import Loading from "../components/Loading";
import StarShipsCardList from "../components/card-lists/StarShipsCardList";
import HamburgerContext from "../context/HamburguerContext";


function StarShipsPage () {
  const { starShips, setStarShips } = useContext(ContentContext);
  const { setActive } = useContext(HamburgerContext);
  const { loading, setLoading } = useContext(LoadingContext);

  const getStarShips = async () => {
    setLoading(!loading);
    setActive(false);
    const allStartShips = await getAllStarShips();
    setStarShips(allStartShips);
    setLoading(!loading);
  }

  useEffect(() => {
    getStarShips();
  }, [])
  
  return(
    <section className="mainPage">
    <Header />
      {starShips.results === undefined ? <Loading /> : <StarShipsCardList />}
    <Footer />
  </section>
  )
}

export default StarShipsPage;