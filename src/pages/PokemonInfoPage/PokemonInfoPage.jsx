import { useNavigate, useLoaderData } from "react-router-dom";
import ChunkObj from "../../components/ChunkInfo/ChunkObj";

const PokemonInfoPage = () => {
  const pokemonInfo = useLoaderData();

  return (
    <div>
      <ChunkObj obj={pokemonInfo} />
    </div>
  );
};

export default PokemonInfoPage;
