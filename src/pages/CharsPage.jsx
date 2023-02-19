import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import getAllChars from "../services/fetchs";
import ContentContext from "../context/ContentContext";
import LoadingContext from "../context/LoadingContext";
import Loading from "../components/Loading";
import "../css/mainPage.css";
import CharsCardList from "../components/card-lists/CharsCardList";
import HamburgerContext from "../context/HamburguerContext";

function CharsPage () {
  const { chars, setChars } = useContext(ContentContext);
  const { setActive } = useContext(HamburgerContext);
  const { loading, setLoading } = useContext(LoadingContext);


  const getChars = async () => {
    setLoading(!loading);
    setActive(false);
    const allChars = await getAllChars()
    setChars(allChars);
    setLoading(!loading);
  }

  useEffect(() => {
    getChars();
  },[])

  return(
    <section className="mainPage">
      <Header />
      {<Loading /> }
      <Footer />
    </section>
  )
}


export default CharsPage;
