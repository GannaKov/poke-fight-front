/* eslint-disable react/prop-types */
import RotateLoader from "react-spinners/RotateLoader";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import styles from "./GamePart.module.css";

const GamePart = ({
  pokemonsForGame,
  isStart,
  showMessage,
  handleStartBtn,
  gameResult,
  handlePlayAgainBtn,
  handleNoPlayBtn,
}) => {
  return (
    <div>
      {pokemonsForGame && !showMessage && !isStart && (
        <div>
          <div className={styles.gameWrp}>
            <div className={styles.pokemonImgWrp}>
              <img
                className={styles.imgPokemonInGame}
                src="https://fakeimg.pl/100x100/ccf20c/0ce316?text=Pokemon"
                alt="Pokemon hidden"
              />
            </div>
            <div className={styles.gameBlockMiddle}>
              <div>
                <p className={styles.startText}>
                  <FaArrowLeft className={styles.iconHorizont} />
                  <FaArrowUp className={styles.iconVertical} />
                  &nbsp;Your Pokemon
                </p>
                <p className={styles.startText}>
                  My Pokemon&nbsp;
                  <FaArrowRight className={styles.iconHorizont} />
                  <FaArrowDown className={styles.iconVertical} />
                </p>
              </div>
            </div>
            <div className={styles.pokemonImgWrp}>
              <img
                className={styles.imgPokemonInGame}
                src="https://fakeimg.pl/100x100/ccf20c/0ce316?text=Pokemon"
                alt="Pokemon hidden"
              />
            </div>
          </div>
          <button
            className={styles.startBtn}
            type="button"
            onClick={handleStartBtn}
          >
            Start
          </button>
        </div>
      )}

      {pokemonsForGame && !showMessage && isStart && (
        <div>
          <div className={styles.gameWrp}>
            <div className={styles.pokemonImgWrp}>
              <img
                className={styles.imgPokemonInGame}
                src={pokemonsForGame[0].img}
                alt={pokemonsForGame[0].name.english}
              />
            </div>
            <div className={styles.gameBlockMiddle}>
              <div>
                <p className={styles.startText}>
                  <FaArrowLeft className={styles.iconHorizont} />
                  <FaArrowUp className={styles.iconVertical} />
                  &nbsp;Your Pokemon&nbsp;
                  {pokemonsForGame[0].name.english}
                </p>
                <p className={styles.startText}>
                  My Pokemon&nbsp;
                  {pokemonsForGame[1].name.english}
                  &nbsp;
                  <FaArrowRight className={styles.iconHorizont} />
                  <FaArrowDown className={styles.iconVertical} />
                </p>
              </div>
            </div>
            <div className={styles.pokemonImgWrp}>
              <img
                className={styles.imgPokemonInGame}
                src={pokemonsForGame[1].img}
                alt={pokemonsForGame[1].name.english}
              />
            </div>
          </div>
          <div>
            {!gameResult ? (
              <div className={styles.gameStartWrp}>
                <p className={styles.startText}>Wait, they are fighting ...</p>
                <RotateLoader color="rgb(10, 233, 51)" />
              </div>
            ) : (
              <div>
                <p className={styles.startText}>
                  <span className={styles.textAccent}>Winner:</span>&nbsp;
                  {pokemonsForGame[gameResult.winner].name.english}
                </p>

                <div className={styles.scoreTextWrp}>
                  <span className={styles.textAccent}>Score:</span>
                  <span className={styles.startText}>
                    &nbsp;Pokemon&nbsp;{pokemonsForGame[0].name.english}:&nbsp;
                    <span className={styles.textAccent}>
                      {gameResult.scoreFirst}
                    </span>
                    &nbsp;:
                  </span>
                  <span className={styles.startText}>
                    &nbsp;Pokemon&nbsp;
                    {pokemonsForGame[1].name.english}:&nbsp;
                    <span className={styles.textAccent}>
                      {gameResult.scoreSecond}
                    </span>
                  </span>
                </div>

                <div className={styles.playAgainBtnWrp}>
                  <button
                    className={styles.gameAgainBtn}
                    type="button"
                    onClick={handlePlayAgainBtn}
                  >
                    Play Again
                  </button>
                  <button
                    className={styles.gameAgainBtn}
                    type="button"
                    onClick={handleNoPlayBtn}
                  >
                    No
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePart;
