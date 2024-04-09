import { useNavigate, useLoaderData, useParams } from "react-router-dom";

import ChunkObj from "../../components/ChunkInfo/ChunkObj";
import ChunkArr from "../../components/ChunkInfo/ChunkArr";
import GoBack from "../../components/GoBack/GoBack";

const PokemonInfoPage = () => {
  const { id, info } = useParams();
  const pokemonInfo = useLoaderData();

  return (
    <div>
      <GoBack state={`/pokemon/${id}`} />
      {typeof pokemonInfo[info] === "object" &&
        !Array.isArray(pokemonInfo[info]) && (
          <ChunkObj obj={pokemonInfo} typeInfo={info} />
        )}
      {Array.isArray(pokemonInfo[info]) && (
        <ChunkArr obj={pokemonInfo} typeInfo={info} />
      )}
    </div>
  );
};

export default PokemonInfoPage;
