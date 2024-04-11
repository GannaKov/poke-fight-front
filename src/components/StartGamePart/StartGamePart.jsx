/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./StartGamePart.module.css";
import PacmanLoader from "react-spinners/PacmanLoader";

const StartGamePart = ({ isPlay, showMessage, handlePlayChoiceClick }) => {
  const navigate = useNavigate();

  const handleStatusticsClick = () => {
    navigate("/game/leaderboard");
  };
  return (
    <>
      {isPlay !== 1 && !showMessage && (
        <>
          <p className={styles.startText}>
            Hi, my name is <span className={styles.textAccent}>Pikachu</span>!
          </p>
          <p className={styles.startText}>Do you want to play?</p>
          <div className={styles.startBtnWrp}>
            <button
              className={styles.startBtn}
              type="button"
              name="yes"
              onClick={handlePlayChoiceClick}
            >
              YES
            </button>
            <button
              className={styles.startBtn}
              type="button"
              name="later"
              onClick={handlePlayChoiceClick}
            >
              LATER
            </button>
          </div>

          <button
            className={styles.statisticsBtn}
            type="button"
            onClick={handleStatusticsClick}
          >
            Statistics
          </button>
        </>
      )}
      {isPlay === 2 && showMessage && (
        <div>
          <p className={styles.startText}>No Problem, I will wait for you...</p>
        </div>
      )}
      {isPlay === 1 && showMessage && (
        <div className={styles.gameStartWrp}>
          <p className={styles.startText}>Wait for your pokemon...</p>
          <PacmanLoader color="rgb(10, 233, 51)" />
        </div>
      )}
    </>
  );
};

export default StartGamePart;
