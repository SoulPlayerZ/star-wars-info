import { useContext, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllVehicles } from "../services/fetchs";
import "../css/mainPage.css";
import LoadingContext from "../context/LoadingContext";
import ContentContext from "../context/ContentContext";
import Loading from "../components/Loading";
import VehiclesCardList from "../components/card-lists/VehiclesCardLits";
import HamburgerContext from "../context/HamburguerContext";


function VehiclesPage () {
  const { vehicles, setVehicles } = useContext(ContentContext);
  const { setActive } = useContext(HamburgerContext);
  const { loading, setLoading } = useContext(LoadingContext);

  const getVehicles = async () => {
    setLoading(!loading);
    setActive(false);
    const allVehicles = await getAllVehicles();
    setVehicles(allVehicles);
    setLoading(!loading);
  }

  useEffect(() => {
    getVehicles();
  }, [])
  
  return(
    <section className="mainPage">
    <Header />
      {vehicles.results === undefined ? <Loading /> : <VehiclesCardList />}
    <Footer />
  </section>
  )
}

export default VehiclesPage;