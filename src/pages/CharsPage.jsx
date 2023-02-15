import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import getChars from "../services/fetchs";
import CharsContext from "../context/CharsContext";
import LoadingContext from "../context/LoadingContext";
import Loading from "../components/Loading";
import "../css/mainPage.css";

function CharsPage () {
  const { chars, setChars } = useContext(CharsContext);
  const { loading, setLoading } = useContext(LoadingContext);


  const getCharsFromAPI = async () => {
    setLoading(!loading);
    const charsReturned = await getChars()
    setChars(charsReturned);
    setLoading(!loading);
  }

  useEffect(() => {
    getCharsFromAPI();
  },[])

  return(
    <section className="mainPage">
      <Header />
      {chars.results === undefined ? <Loading /> : <h2 className="loading">CARD LIST AQUI </h2>}
      <Footer />
    </section>
  )
}


export default CharsPage;
