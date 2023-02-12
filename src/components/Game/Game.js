import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';

import GuessInputForm from '../GuessInputForm';
import GuessesList from '../GuessesList';
import WinBanner from '../WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
// Set initial List -objects with word and id properties-
const initialList = [];
let emptySpacesWord = '';
for (let i = 0; i < WORD_LENGTH; i++) {
  emptySpacesWord += ' ';
}
for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
  initialList.push({ word: emptySpacesWord, id: Math.random() });
}

function Game() {
  const [guesses, setGuesses] = React.useState(initialList);
  const [numberOfGuesses, setNumberOfGuesses] = React.useState(0);
  const [guessed, setGuessed] = React.useState(false);
  const [gameOver, setGameOver] = React.useState(false);

  const addGuess = (newGuess) => {
    const newList = [...guesses];
    newList[numberOfGuesses].word = newGuess;
    setGuesses(newList);
    if (newGuess === answer) {
      setGuessed(true);
      setGameOver(true);
    }
    const nextNumberOfGuesses = numberOfGuesses + 1;
    if (nextNumberOfGuesses === NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
    }
    setNumberOfGuesses(nextNumberOfGuesses);
  };

  return (
    <>
      <GuessesList guessesList={guesses} answer={answer} />
      <GuessInputForm addGuess={addGuess} disabled={gameOver} />
      {guessed && <WinBanner attempts={numberOfGuesses} />}
      {!guessed && gameOver && <LoseBanner answer={answer} />}
    </>
  );
}

export default Game;
