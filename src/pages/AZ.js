import React from 'react'
import Az from '../data/az.json'
import AzCard from '../components/public/az/AzCard';

function AZ() {
  return (
    <>
      <div className="row pt-5">
        {Az.map((azData) => (
          <div className="col-md-3 mb-4" key={azData.id}>
            <AzCard data={azData} />
          </div>
        ))}
      </div>
    </>
  );
}

export default AZ;