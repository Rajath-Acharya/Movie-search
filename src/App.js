import React, { useState } from "react";
import "./App.css";
import Showmovie from "../src/components/showmovie";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const API_KEY = `https://www.omdbapi.com/?s=${search}&apikey=f5d91c32`;
    fetch(API_KEY)
      .then((res) => res.json())
      .then((res) => {
        setMovie(res.Search);
        cancelText();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const cancelText = () => {
    setSearch("");
  };

  return (
    <>
      <div className="main-div">
        <h1 className="header">MOVIES</h1>
        <form className="form" onSubmit={submitHandler}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="text"
            value={search}
            className="input"
            placeholder="Enter a movie name"
          />
          <button
            onClick={(e) => submitHandler(e)}
            type="submit"
            className="form-button"
          >
            Search
          </button>
        </form>
      </div>
      <div className="show">
        {movie.map((mov, index) => (
          <Showmovie mov={mov} key={index} />
        ))}
      </div>
    </>
  );
};

export default App;
