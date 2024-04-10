import { useLoaderData, useLocation } from "react-router-dom";
import styles from "../SinglePokemonPage/SinglePokemonPage.module.css";
import ChunkObj from "../../components/ChunkInfo/ChunkObj";
import ChunkArr from "../../components/ChunkInfo/ChunkArr";
import DropDown from "../../components/DropDown/DropDown";
import GoBack from "../../components/GoBack/GoBack";

const SinglePokemonPage = () => {
  const singlePokemon = useLoaderData();
  const location = useLocation();
  const backLinkHref = location.state ?? "/pokemon";

  return (
    <div className={styles.pageInnWrp}>
      <GoBack state={backLinkHref} />
      <DropDown id={singlePokemon._id} />
      <img
        src={singlePokemon.img}
        alt={singlePokemon.name.english}
        className={styles.pokemonImg}
      />
      <div className={styles.oneChunkWrp}>
        <ChunkObj obj={singlePokemon} typeInfo="name" />
      </div>

      <div className={styles.oneChunkWrp}>
        {" "}
        <ChunkObj obj={singlePokemon} typeInfo="base" />
      </div>

      <div className={styles.oneChunkWrp}>
        <ChunkArr arr={singlePokemon} typeInfo="type" />
      </div>
    </div>
  );
};

export default SinglePokemonPage;
