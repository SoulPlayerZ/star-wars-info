import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import getChars from "../services/fetchs";
import ContentContext from "../context/ContentContext";
import LoadingContext from "../context/LoadingContext";
import Loading from "../components/Loading";
import "../css/mainPage.css";
import CharsCardList from "../components/card-lists/CharsCardList";

function CharsPage () {
  const { chars, setChars } = useContext(ContentContext);
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
      {chars.results === undefined ? <Loading /> : <CharsCardList />}
      <Footer />
    </section>
  )
}


export default CharsPage;
