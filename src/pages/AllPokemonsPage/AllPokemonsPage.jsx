import { useNavigate, useLoaderData, Link } from "react-router-dom";
import styles from "./AllPokemonsPage.module.css";

const AllPokemonsPage = () => {
  const allPokemonArr = useLoaderData();
  return (
    <ul>
      {allPokemonArr.map((pok) => (
        <Link key={pok._id} to={`/pokemon/${pok._id}`}>
          <li>
            <h2>{pok.name.english}</h2>
            <img
              src={pok.img}
              alt={pok.name.english}
              className={styles.pokemonImg}
            />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default AllPokemonsPage;
