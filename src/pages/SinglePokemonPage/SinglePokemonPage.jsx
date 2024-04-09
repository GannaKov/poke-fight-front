import { useNavigate, useLoaderData } from "react-router-dom";
import styles from "../SinglePokemonPage/SinglePokemonPage.module.css";
import ChunkObj from "../../components/ChunkInfo/ChunkObj";
import ChunkArr from "../../components/ChunkInfo/ChunkArr";
import DropDown from "../../components/DropDown/DropDown";

const SinglePokemonPage = () => {
  const singlePokemon = useLoaderData();
  return (
    <div>
      <DropDown id={singlePokemon._id} />
      <img
        src={singlePokemon.img}
        alt={singlePokemon.name.english}
        className={styles.pokemonImg}
      />
      <ChunkObj obj={singlePokemon} typeInfo="name" />
      <ChunkObj obj={singlePokemon} typeInfo="base" />
      <ChunkArr obj={singlePokemon} typeInfo="type" />
    </div>
  );
};

export default SinglePokemonPage;
