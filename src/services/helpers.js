export function getRandomNumbers(max) {
  const numbers = [];

  while (numbers.length < 2) {
    const randomNumber = Math.floor(Math.random() * (max + 1));
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}
