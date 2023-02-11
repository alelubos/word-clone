import React from 'react';

function GuessInputForm({ addGuess, disabled }) {
  const [newGuess, setNewGuess] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newGuess.length < 5) {
      return;
    }
    console.log(newGuess);
    addGuess(newGuess);
    setNewGuess('');
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={newGuess}
        onChange={(e) => setNewGuess(e.target.value.toUpperCase())}
        required={true}
        minLength={5}
        maxLength={5}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInputForm;
