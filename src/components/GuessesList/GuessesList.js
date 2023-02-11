import React from 'react';
import { checkGuess } from '../../game-helpers';

function GuessesList({ guessesList, answer }) {
  const wordRenderer = (guessWord) => {
    if (guessWord[0] !== ' ') {
      return checkGuess(guessWord, answer).map((char, idx) => (
        <span className={'cell ' + char.status} key={idx}>
          {char.letter}
        </span>
      ));
    }
    return guessWord
      .split('')
      .map((char, idx) => <span className='cell' key={idx}></span>);
  };

  return (
    <div className='guess-results'>
      {guessesList.map((guess) => (
        <p className='guess' key={guess.id}>
          {wordRenderer(guess.word)}
        </p>
      ))}
    </div>
  );
}

export default GuessesList;
