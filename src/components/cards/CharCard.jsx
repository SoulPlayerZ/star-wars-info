import "../../css/cards.css";

function CharCard ({ char }) {

  console.log(char);

  return( 
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://pm1.narvii.com/6069/e238f41151187ac22250ef3a60f070f7d7f1c470_hq.jpg" alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{char.name}</div>
      </div>
    </div>





    // <section>
    //   <img src="https://pm1.narvii.com/6069/e238f41151187ac22250ef3a60f070f7d7f1c470_hq.jpg" alt={ `${char.name}  perfil` } />
    //   <h2> {char.name} </h2>

    // </section>
  )
}

export default CharCard;