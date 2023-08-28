import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import movieList from "../static/movieList";
import Loading from "./Loading";
import "./MovieList.css";

export default function MovieList() {
  const SERVER_API = "https://moviestates.codestates-seb.link/movies/top";

  const [movies, setMovies] = useState(movieList.data);
  useEffect(() => {
    //사이드 이펙트
    fetch(SERVER_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
        console.log(data.data); // 이 위치에서 변수 data를 사용
      });
  }, []);
  //console.log(movies);

  return (
    <ul className="movies">
      <div id="container">
        {movies.length === 0 ? (
           <Loading />
        ) : (
          movies.map((item) => <MovieItem key={item.id} movie={item} />)
        )}
      </div>
    </ul>
  );
}
