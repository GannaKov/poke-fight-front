import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { getRandomNumbers } from "../../services/helpers";
import { gameResultFunction } from "../../services/helpers";
import PacmanLoader from "react-spinners/PacmanLoader";
import RotateLoader from "react-spinners/RotateLoader";

import styles from "./HomePage.module.css";
const HomePage = () => {
  const allPokemonArr = useLoaderData();

  const navigate = useNavigate();

  const [isPlay, setIsPlay] = useState(0);
  const [pokemonsForGame, setPokemonsForGame] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [gameResult, setGameResult] = useState(null);
  const [playAgain, setPlayAgain] = useState(false);

  //-------------------------------------
  useEffect(() => {
    let timer;
    if (isPlay === 1) {
      setShowMessage(true);
      const randomNumbers = getRandomNumbers(allPokemonArr.length);
      setPokemonsForGame(randomNumbers.map((index) => allPokemonArr[index]));
    }
    if (isPlay === 2) {
      setShowMessage(true);
    }
    if (isPlay === 1 || isPlay === 2) {
      timer = setTimeout(() => {
        setShowMessage(false);
        if (isPlay === 2) {
          setIsPlay(0);
        }
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [allPokemonArr, isPlay, playAgain]);
  //---------------------------------------------------------
  useEffect(() => {
    let gameResultTimer;
    if (isStart && !showMessage && gameResult === null) {
      gameResultTimer = setTimeout(() => {
        const result = gameResultFunction(
          pokemonsForGame[0],
          pokemonsForGame[1]
        );
        setGameResult(result);
      }, 2000);
    }
    return () => {
      clearTimeout(gameResultTimer);
    };
  }, [isStart, showMessage, gameResult, pokemonsForGame]);
  //--------------------------------------------------------------
  const handlePlayChoiceClick = (e) => {
    const { name } = e.target;

    if (name === "later") {
      setIsPlay(2);
    } else {
      setIsPlay(1);
    }
  };
  //-------------------------------------------------------------------
  const handleStartBtn = () => {
    setIsStart(true);
  };
  //-------------------------------------------------------------------
  const handlePlayAgainBtn = () => {
    // setIsStart(false);
    // setPlayAgain(true);
    // setGameResult(null);
    setIsStart(false);
    setPlayAgain((prev) => !prev);
    setGameResult(null);
  };
  //------------------------------------------------------------
  const handleNoPlayBtn = () => {
    // setPlayAgain(false);
    setIsStart(false);
    setIsPlay(0);
    setGameResult(null);
    setPokemonsForGame(null);
  };
  //------------------------------------------------------
  const handleStatusticsClick = () => {
    navigate("/game/leaderboard");
  };
  //------------------------------------------------------
  return (
    <div className={styles.pageInnWrp}>
      <div className={styles.pikachuWrp}>
        <img
          className={styles.pikachuImg}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt="Pikachu"
        />
      </div>

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
            className={styles.startBtn}
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
      {pokemonsForGame && !showMessage && !isStart && (
        <div>
          <div className={styles.gameWrp}>
            <div>
              <img
                className={styles.imgPokemonInGame}
                src="https://fakeimg.pl/100x100/ccf20c/0ce316?text=Pokemon"
                alt="Polemon hidden"
              />
            </div>
            <div className={styles.gameBlockMiddle}>
              <div>
                <p className={styles.startText}>&larr;Your Pokemon</p>
                <p className={styles.startText}>My Pokemon &rarr;</p>
              </div>
            </div>
            <div>
              <img
                className={styles.imgPokemonInGame}
                src="https://fakeimg.pl/100x100/ccf20c/0ce316?text=Pokemon"
                alt="Polemon hidden"
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
            <div>
              <img
                className={styles.imgPokemonInGame}
                src={pokemonsForGame[0].img}
                alt={pokemonsForGame[0].name.english}
              />
            </div>
            <div className={styles.gameBlockMiddle}>
              <div>
                <p className={styles.startText}>
                  &larr;&nbsp;Your Pokemon&nbsp;
                  {pokemonsForGame[0].name.english}
                </p>
                <p className={styles.startText}>
                  My Pokemon&nbsp;
                  {pokemonsForGame[1].name.english}
                  &nbsp;&rarr;
                </p>
              </div>
            </div>
            <div>
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
                {/* <p className={styles.startText}> */}
                <span className={styles.textAccent}>Score:</span>
                {/* </p> */}
                <span className={styles.startText}>
                  &nbsp; Pokemon&nbsp;{pokemonsForGame[0].name.english}:&nbsp;
                  <span className={styles.textAccent}>
                    {gameResult.scoreFirst}
                  </span>
                  &nbsp;:&nbsp;Pokemon&nbsp;
                  {pokemonsForGame[1].name.english}:&nbsp;
                  <span className={styles.textAccent}>
                    {gameResult.scoreSecond}
                  </span>
                </span>
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

export default HomePage;
