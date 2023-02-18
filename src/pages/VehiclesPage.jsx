import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import getAllVehicles from "../services/fetchs";
import ContentContext from "../context/ContentContext";
import LoadingContext from "../context/LoadingContext";
import Loading from "../components/Loading";
import "../css/mainPage.css";
import VehiclesCardList from "../components/card-lists/VehiclesCardList";

function VehiclesPage () {
  const { vehicles, setVehicles } = useContext(ContentContext);
  const { loading, setLoading } = useContext(LoadingContext);


  const getVehicles = async () => {
    setLoading(!loading);
    const allVehicles = await getAllVehicles()
    setVehicles(allVehicles);
    setLoading(!loading);
  }

  useEffect(() => {
    getVehicles();
  },[])

  return(
    <section className="mainPage">
      <Header />
      {vehicles.results === undefined ? <Loading /> : <VehiclesCardList />}
      <Footer />
    </section>
  )
}


export default VehiclesPage;
