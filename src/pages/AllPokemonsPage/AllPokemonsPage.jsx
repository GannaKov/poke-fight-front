import { useLoaderData, Link } from "react-router-dom";
import styles from "./AllPokemonsPage.module.css";

const AllPokemonsPage = () => {
  const allPokemonArr = useLoaderData();
  return (
    <ul>
      {allPokemonArr.map((pok) => (
        <li key={pok._id}>
          <Link to={`/pokemon/${pok._id}`} state="/pokemon">
            <h2>{pok.name.english}</h2>
            <img
              src={pok.img}
              alt={pok.name.english}
              className={styles.pokemonImg}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AllPokemonsPage;
