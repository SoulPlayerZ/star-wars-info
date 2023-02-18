import Header from "../components/Header";
import Footer from "../components/Footer";


function PlanetsPage () {
  
  return(
    <section className="mainPage">
    <Header />
    <h3 className="loading">PLANETS PAGE</h3>
    {/* {chars.results === undefined ? <Loading /> : <CharsCardList />} */}
    <Footer />
  </section>
  )
}

export default PlanetsPage;