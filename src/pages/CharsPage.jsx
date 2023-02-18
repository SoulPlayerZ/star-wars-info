import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import getAllChars from "../services/fetchs";
import ContentContext from "../context/ContentContext";
import LoadingContext from "../context/LoadingContext";
import Loading from "../components/Loading";
import "../css/mainPage.css";
import CharsCardList from "../components/card-lists/CharsCardList";

function CharsPage () {
  const { chars, setChars } = useContext(ContentContext);
  const { loading, setLoading } = useContext(LoadingContext);


  const getChars = async () => {
    setLoading(!loading);
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
      {chars.results === undefined ? <Loading /> : <CharsCardList />}
      <Footer />
    </section>
  )
}


export default CharsPage;
