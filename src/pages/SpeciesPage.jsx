import { useContext, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllSpecies } from "../services/fetchs";
import "../css/mainPage.css";
import LoadingContext from "../context/LoadingContext";
import ContentContext from "../context/ContentContext";
import Loading from "../components/Loading";
import SpeciesCardList from "../components/card-lists/SpeciesCardList";


function SpeciesPage () {
  const { species, setSpecies } = useContext(ContentContext);
  const { loading, setLoading } = useContext(LoadingContext);

  const getSpecies = async () => {
    setLoading(!loading);
    const allSpecies = await getAllSpecies();
    setSpecies(allSpecies);
    setLoading(!loading);
  }

  useEffect(() => {
    getSpecies();
  }, [])
  
  return(
    <section className="mainPage">
    <Header />    
      {species.results === undefined ? <Loading /> : <SpeciesCardList />}
    <Footer />
  </section>
  )
}

export default SpeciesPage;