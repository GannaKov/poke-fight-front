import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getRandomNumbers } from "../../services/helpers";
import { gameResultFunction } from "../../services/helpers";
import StartGamePart from "../../components/StartGamePart/StartGamePart";

import styles from "./HomePage.module.css";
import GamePart from "../../components/GamePart/GamePart";
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
    setIsStart(false);
    setPlayAgain((prev) => !prev);
    setGameResult(null);
  };
  //------------------------------------------------------------
  const handleNoPlayBtn = () => {
    setIsStart(false);
    setIsPlay(0);
    setGameResult(null);
    setPokemonsForGame(null);
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
      <StartGamePart
        isPlay={isPlay}
        showMessage={showMessage}
        handlePlayChoiceClick={handlePlayChoiceClick}
      />
      <GamePart
        pokemonsForGame={pokemonsForGame}
        isStart={isStart}
        showMessage={showMessage}
        handleStartBtn={handleStartBtn}
        gameResult={gameResult}
        handlePlayAgainBtn={handlePlayAgainBtn}
        handleNoPlayBtn={handleNoPlayBtn}
      />
    </div>
  );
};

export default HomePage;
