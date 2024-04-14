import { useRouteError } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const error = useRouteError();
  console.log(error.response.data.message);
  return (
    <div className={styles.pageWrp}>
      <h1 className={styles.errorTitle}>Oops!</h1>
      <p className={styles.errorText}>
        <i>
          {error.response.data.message ||
            error.response.statusText ||
            error.message}
        </i>
      </p>
      <div className={styles.pikachuWrp}>
        <img
          className={styles.pikachuImg}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt="Pikachu"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
