import React from 'react'
import { Link } from 'react-router-dom'

function AzCard({data}) {
  return (
    <>
      <div className="card">
        <Link
          to={`/az/${data.id}`}
          className="text-center p-5 text-decoration-none"
        >
          {data.title}
        </Link>
      </div>
    </>
  );
}

export default AzCard