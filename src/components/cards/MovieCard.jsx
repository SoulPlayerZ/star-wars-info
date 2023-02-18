import "../../css/cards.css";

function MovieCard ({ movie }) {

  return( 
    <section className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://pm1.narvii.com/6069/e238f41151187ac22250ef3a60f070f7d7f1c470_hq.jpg" alt="Mountain" />
      <section className="px-6 py-4">
        <section className="font-bold text-xl mb-2">{movie.title}</section>
      </section>
    </section>
  )
}

export default MovieCard;