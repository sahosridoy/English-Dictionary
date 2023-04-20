import React from 'react'

function VerbSearch({verbs}) {
    const CssStyle = {
          
    };
    return (
      <>
        <h4>Verb</h4>

        {verbs.map((verb) => (
          <div class="card text-start" key={verb.en}>
            <div class="card-body">
              <h6 class="card-title">
                {verb.v1} - {verb.bn}
              </h6>
              <p class="card-text">
                {verb.v1} - {verb.bn} - {verb.v2} - {verb.v3} - {verb.v4} -{" "}
                {verb.v5}
              </p>
            </div>
          </div>
        ))}
      </>
    );
}

export default VerbSearch