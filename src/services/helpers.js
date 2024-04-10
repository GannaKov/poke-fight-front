export function getRandomNumbers(max) {
  const numbers = [];

  while (numbers.length < 2) {
    const randomNumber = Math.floor(Math.random() * max);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

export function gameResultFunction(pokFirst, pokSecond) {
  let scoreFirst = 0;
  let scoreSecond = 0;
  if (pokFirst.base.Attack > pokSecond.base.Attack) {
    scoreFirst += 1;
  } else if (pokFirst.base.Attack < pokSecond.base.Attack) {
    scoreSecond += 1;
  } else {
    scoreFirst += 1;
    scoreSecond += 1;
  }

  if (pokFirst.base.Defense > pokSecond.base.Defense) {
    scoreFirst += 1;
  } else if (pokFirst.base.Defense < pokSecond.base.Defense) {
    scoreSecond += 1;
  } else {
    scoreFirst += 1;
    scoreSecond += 1;
  }

  if (pokFirst.base.Speed > pokSecond.base.Speed) {
    scoreFirst += 1;
  } else if (pokFirst.base.Speed < pokSecond.base.Speed) {
    scoreSecond += 1;
  } else {
    scoreFirst += 1;
    scoreSecond += 1;
  }

  if (pokFirst.base.HP > pokSecond.base.HP) {
    scoreFirst += 1;
  } else if (pokFirst.base.HP < pokSecond.base.HP) {
    scoreSecond += 1;
  } else {
    scoreFirst += 1;
    scoreSecond += 1;
  }

  if (scoreFirst === scoreSecond) {
    if (pokFirst.base.HP > pokSecond.base.HP) {
      scoreFirst += 1;
    } else {
      scoreSecond += 1;
    }
  }
  const winner = scoreFirst > scoreSecond ? 0 : 1;
  const result = { scoreFirst, scoreSecond, winner };

  return result;
}
