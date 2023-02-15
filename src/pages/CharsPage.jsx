import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import getChars from "../services/fetchs";
import "../css/mainPage.css";

function CharsPage () {

    const getCharsFromAPI = async () => {
      console.log(await getChars());
    }


  useEffect(() => {
    getCharsFromAPI();
  },[])

  return(
    <section className="mainPage">
      <Header />
      <Footer />
    </section>
  )
}


export default CharsPage;
