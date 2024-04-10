import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getRandomNumbers } from "../../services/helpers";
import { gameResultFunction } from "../../services/helpers";
import PacmanLoader from "react-spinners/PacmanLoader";
import RotateLoader from "react-spinners/RotateLoader";

import styles from "./HomePage.module.css";
const HomePage = () => {
  const allPokemonArr = useLoaderData();

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
      console.log("in random");
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
      }, 3000);
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
  // const handleStatusticsClick = () => {
  //   console.log("statistics");
  // };
  //------------------------------------------------------
  return (
    <div className={styles.pageInnWrp}>
      <div>
        <img
          className={styles.pikachuImg}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt="Pikachu"
        />
      </div>

      {isPlay !== 1 && !showMessage && (
        <>
          <p>Hi, my name is Pikachu</p>
          <p>Do you want to play?</p>
          <button type="button" name="yes" onClick={handlePlayChoiceClick}>
            YES
          </button>
          <button type="button" name="later" onClick={handlePlayChoiceClick}>
            LATER
          </button>
          <button type="button"> Statistics</button>
        </>
        // onClick={handleStatusticsClick}
      )}

      {isPlay === 2 && showMessage && (
        <div>
          <p>No Problem, I will wait for you</p>
        </div>
      )}
      {isPlay === 1 && showMessage && (
        <div>
          <p>Wait for your pokemon</p>
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
                <p>&larr;You Pokemon</p>
                <p>My Pokemon &rarr;</p>
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
          <button type="button" onClick={handleStartBtn}>
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
                <p>
                  &larr;&nbsp;You Pokemon&nbsp;
                  {pokemonsForGame[0].name.english}
                </p>
                <p>
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
              <>
                <p>Wait, they are fighting ...</p>
                <RotateLoader color="rgb(10, 233, 51)" />
              </>
            ) : (
              <div>
                <p>
                  Winner:&nbsp;{pokemonsForGame[gameResult.winner].name.english}
                </p>
                <p>Score:</p>
                <p>
                  Pokemon&nbsp;{pokemonsForGame[0].name.english}:&nbsp;
                  {gameResult.scoreFirst}&nbsp;:&nbsp;Pokemon&nbsp;
                  {pokemonsForGame[1].name.english}:&nbsp;
                  {gameResult.scoreSecond}
                </p>
                <button type="button" onClick={handlePlayAgainBtn}>
                  Play Again
                </button>
                <button type="button" onClick={handleNoPlayBtn}>
                  No
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
