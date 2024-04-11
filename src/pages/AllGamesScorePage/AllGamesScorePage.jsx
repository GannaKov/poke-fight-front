import { useLoaderData } from "react-router-dom";
import styles from "./AllGamesScorePage.module.css";
import GoBack from "../../components/GoBack/GoBack";

const AllGamesScorePage = () => {
  const allGamesResult = useLoaderData();

  return (
    <div className={styles.pageInnWrp}>
      <GoBack state={"/"} />
      <div className={styles.sectionWrp}>
        {" "}
        <h2 className={styles.pageTitle}> Statistics</h2>
        {allGamesResult.length > 0 ? (
          <ul>
            {allGamesResult.map(
              ({ participents, pokWinner, winner, score, _id }) => (
                <li key={_id} className={styles.scoreItem}>
                  <p className={styles.itemTextTytle}>
                    {participents.pok1.name}&nbsp;:&nbsp;
                    {participents.pok2.name}
                  </p>
                  <p className={styles.itemText}>
                    <span className={styles.itemSpan}>Score:</span> &nbsp;
                    {score[0]}&nbsp;:&nbsp;{score[1]}
                  </p>
                  <p>
                    <span className={styles.itemSpan}>Winner:</span>&nbsp;&nbsp;
                    {winner}
                    &nbsp; with pokemon
                    <span className={styles.itemSpan}> {pokWinner.name}</span>
                  </p>
                </li>
              )
            )}
          </ul>
        ) : (
          <div>
            <p>You haven&#x2bc;t played yet. Do it!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllGamesScorePage;
