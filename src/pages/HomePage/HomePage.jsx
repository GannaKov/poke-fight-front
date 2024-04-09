import { useState, useEffect } from "react";
import { useNavigate, useLoaderData, Link } from "react-router-dom";
import { getRandomNumbers } from "../../services/helpers";
import styles from "./HomePage.module.css";
const HomePage = () => {
  const allPokemonArr = useLoaderData();

  const [isPlay, setIsPlay] = useState(0);
  const [pokemonsForPlay, setPokemonsForPlay] = useState(null);
  const [pokemonsForGame, setPokemonsForGame] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlay === 1) {
      setShowMessage(true);
      timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isPlay]);

  const handlePlayChoiceClick = (e) => {
    console.log(e.target.name);
    const { name } = e.target;

    if (name === "later") {
      setIsPlay(2);
    } else {
      setIsPlay(1);
      const randomNumbers = getRandomNumbers(allPokemonArr.length);
      //setPokemonsForPlay(randomNumbers);
      setPokemonsForGame(randomNumbers.map((index) => allPokemonArr[index]));
    }
  };
  const handleStartBtn = () => {
    setIsStart(true);
  };
  return (
    <div className={styles.pageInnWrp}>
      <div>
        <img
          className={styles.pikachuImg}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt="Pikachu"
        />
      </div>

      {isPlay !== 1 && (
        <>
          <p>Hi, my name is Pikachu</p>
          <p>Do you want to play?</p>
          <button type="button" name="yes" onClick={handlePlayChoiceClick}>
            YES
          </button>
          <button type="button" name="later" onClick={handlePlayChoiceClick}>
            LATER
          </button>
        </>
      )}

      {isPlay === 2 && (
        <div>
          <p>No Problem, I will wait for you</p>
        </div>
      )}
      {isPlay === 1 && showMessage && (
        <div>
          <p>Wait for your pokemon</p>
        </div>
      )}
      {pokemonsForPlay && !showMessage && !isStart && (
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

      {pokemonsForPlay && !showMessage && isStart && (
        <div>
          <div className={styles.gameWrp}>
            <div>
              <img
                className={styles.imgPokemonInGame}
                src={allPokemonArr[pokemonsForPlay[0]].img}
                alt={allPokemonArr[pokemonsForPlay[0]].name.english}
              />
            </div>
            <div className={styles.gameBlockMiddle}>
              <div>
                <p>
                  &larr;&nbsp;You Pokemon&nbsp;
                  {allPokemonArr[pokemonsForPlay[0]].name.english}
                </p>
                <p>
                  My Pokemon&nbsp;
                  {allPokemonArr[pokemonsForPlay[1]].name.english}
                  &nbsp;&rarr;
                </p>
              </div>
            </div>
            <div>
              <img
                className={styles.imgPokemonInGame}
                src={allPokemonArr[pokemonsForPlay[1]].img}
                alt={allPokemonArr[pokemonsForPlay[1]].name.english}
              />
            </div>
          </div>
          <div>
            <p>Wait, they are fighting ...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
