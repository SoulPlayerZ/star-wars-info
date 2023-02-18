import { useContext, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllPlanets } from "../services/fetchs";
import "../css/mainPage.css";
import LoadingContext from "../context/LoadingContext";
import ContentContext from "../context/ContentContext";
import Loading from "../components/Loading";
import PlanetsCardList from "../components/card-lists/PlanetsCardList";


function PlanetsPage () {
  const { planets, setPlanets } = useContext(ContentContext);
  const { loading, setLoading } = useContext(LoadingContext);

  const getPlanets = async () => {
    setLoading(!loading);
    const allPlanets = await getAllPlanets();
    setPlanets(allPlanets);
    setLoading(!loading);
  }

  useEffect(() => {
    getPlanets();
  }, [])
  
  return(
    <section className="mainPage">
    <Header />
    
    {planets.results === undefined ? <Loading /> : <PlanetsCardList />}
    <Footer />
  </section>
  )
}

export default PlanetsPage;