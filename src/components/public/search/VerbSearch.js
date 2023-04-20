import React from 'react'

function VerbSearch({verbs}) {
    const CssStyle = {
        fontSize: "18px",
    };
    return (
      <>
        <h4>Verb</h4>

        {verbs.map((verb) => (
            <div style={CssStyle} className="card text-start" key={verb.en}>
            <div className="card-body">
              <h6 className="card-title">
                {verb.v1} - {verb.bn}
              </h6>
              <p className="card-text">
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