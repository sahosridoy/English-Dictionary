import React, { useState } from 'react'
import Vocabulary from '../data/word.json';
import verbList from '../data/verb.json';
import WordSearch from '../components/public/search/WordSearch';
import VerbSearch from '../components/public/search/VerbSearch';

export default function Home() {
  const [verbs, setVerbs] = useState({});
  const [words, setWords] = useState({});
  const [inputValue, setInputValue] = useState('');

 const changeHandelar = (e) => {
   setInputValue(e.target.value);
   if (e.target.value !== "") {
     
     const as = Vocabulary.filter((word) =>
     word.en.toLowerCase().includes(e.target.value.toLowerCase())
     );
     const be = verbList.filter((verb) =>
     verb.v1.toLowerCase().includes(e.target.value.toLowerCase())
     );
     setWords(as);
     setVerbs(be);
   } else {
     setWords("");
     setVerbs("");
    }
}

  return (
    <>
      <div className="home_page">
        <div className="row">
          <div className="col-md-8 mx-auto my-2">
            <form>
              <div className="mb-3">
                <h4 className="text-center">Search Here Anything</h4>
                <input
                  type="text"
                  className="form-control"
                  value={inputValue}
                  onChange={changeHandelar}
                />
                <div className="form-text">
                  You can search here anything. EX: Cow, Smoke
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 my-2">
            {words.length > 0 && <WordSearch words={words} />}
            {verbs.length > 0 && <VerbSearch verbs={verbs} />}
          </div>
        </div>
      </div>
    </>
  );
}
