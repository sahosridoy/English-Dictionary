import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Vocabulary from '../data/word.json';
import az from '../data/az.json';

function AZSingle() {
  const { id } = useParams();
  const [letters, setLetters] = useState(az);
  const [words, setWords] = useState(Vocabulary);
  useEffect(() => {

    setLetters(az.filter((letter) => letter.id === id));
    setWords(Vocabulary.filter((word) => word.word_category_id === id));  
  }, []);
  // console.log(id);
  // console.log(letters);
  // console.log(words);
  return (
    <>
      <div className="row pt-5">
        <h4>{letters[0].title}</h4>
        <hr></hr>
        {words.map((word) => (
          <li key={word.en}>{ word.en }</li>
        ))}
      </div>
    </>
  );
}

export default AZSingle;