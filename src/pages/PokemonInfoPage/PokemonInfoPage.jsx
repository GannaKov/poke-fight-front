import { useNavigate, useLoaderData, useParams } from "react-router-dom";

import ChunkObj from "../../components/ChunkInfo/ChunkObj";
import ChunkArr from "../../components/ChunkInfo/ChunkArr";

const PokemonInfoPage = () => {
  const { info } = useParams();
  const pokemonInfo = useLoaderData();
  console.log("type", info);
  return (
    <div>
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
