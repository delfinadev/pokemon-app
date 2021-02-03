import './cards.css'
export default function Cards({ data }) {


  return (
    <>
      <div className="pokecard">
        <img src={data.sprites.other.dream_world.front_default} alt=""></img> 
        <div className="card-data">
          <p className="card-texts">Name: {data.name}</p>
          <p className="card-texts">HP: {data.stats[0].base_stat}</p>
          <p className="card-texts">Attack: {data.stats[1].base_stat} </p>
          <p className="card-texts">Defense:{data.stats[2].base_stat}</p>
          <p className="card-texts">Type: {data.types[0].type.name}</p> 

        </div>

      </div>

    </>
  );
}