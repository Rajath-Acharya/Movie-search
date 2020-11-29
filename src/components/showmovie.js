import React from "react";

function Showmovie({ mov }) {
  console.log(mov.Poster);
  return (
    <div className="show=movies">
      <img src={mov.Poster} alt="wtttt" />
      <div className="name">
        <div>{mov.Title}</div>
        <div className="xyz">Year : {mov.Year}</div>
      </div>
    </div>
  );
}

export default Showmovie;
