import { useLoaderData, useParams } from "react-router-dom";

import ChunkObj from "../../components/ChunkInfo/ChunkObj";
import ChunkArr from "../../components/ChunkInfo/ChunkArr";
import GoBack from "../../components/GoBack/GoBack";
import styles from "./PokemonInfoPage.module.css";

const PokemonInfoPage = () => {
  const { id, info } = useParams();
  const pokemonInfo = useLoaderData();

  return (
    <div className={styles.pageInnWrp}>
      <GoBack state={`/pokemon/${id}`} />
      <div className={styles.chunkWrp}>
        {typeof pokemonInfo[info] === "object" &&
          !Array.isArray(pokemonInfo[info]) && (
            <ChunkObj obj={pokemonInfo} typeInfo={info} />
          )}
        {Array.isArray(pokemonInfo[info]) && (
          <ChunkArr arr={pokemonInfo} typeInfo={info} />
        )}
      </div>
    </div>
  );
};

export default PokemonInfoPage;
