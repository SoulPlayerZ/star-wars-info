import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import getChars from "../services/fetchs";

function CharsPage () {

    const a = async () => {
      console.log(await getChars());
    }


  useEffect(() => {
    a();
  },[])

  return(
    <section>
      <Header />
      <Footer />
    </section>
  )
}


export default CharsPage;
