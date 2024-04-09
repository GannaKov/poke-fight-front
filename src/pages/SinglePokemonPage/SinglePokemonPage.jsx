import { useNavigate, useLoaderData, useLocation } from "react-router-dom";
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
    <div>
      <GoBack state={backLinkHref} />
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
