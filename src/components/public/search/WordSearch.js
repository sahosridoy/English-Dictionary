import React from 'react'

function WordSearch({ words }) {
  return (
    <>
      <h4>Vocabulary</h4>
      <ul>
        {words.map((word) => (
          <li key={word.en}>
            {word.en} - {word.bn} - category - similar
          </li>
        ))}
      </ul>
    </>
  );
}

export default WordSearch;