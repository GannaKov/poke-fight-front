import { useLoaderData, Link } from "react-router-dom";
import styles from "./AllPokemonsPage.module.css";

const AllPokemonsPage = () => {
  const allPokemonArr = useLoaderData();
  return (
    <div className={styles.pageInnWrp}>
      <ul className={styles.pokList}>
        {allPokemonArr.map((pok) => (
          <li key={pok._id} className={styles.listItem}>
            <Link
              to={`/pokemon/${pok._id}`}
              state="/pokemon"
              className={styles.listLink}
            >
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
    </div>
  );
};

export default AllPokemonsPage;
