import React from "react";
import movieList from "../static/movieList";
import "./MovieItem.css";
import {Link} from 'react-router-dom';



export default function MovieItem({ movie }) {
  //const averageScore=movie.averageScore||0;
  //그냥 0으로 표시하고
  //값이 잘 들어있으면 그 값 그대로 averageScore에 할당해줘
  return (
    
   
    <li className="movie" id={movie.id}>
      <Link to={`/movie/${movie.id}`}>
      <img className="movie__poster" src={movie.postImage}></img>
      <div className="infor__box">
        {/* <p className="movie__title">{movie.title}</p> */}
        <h3>{movie.title}</h3>
        <div className="released_star_box">
          <p>개봉: {movie.releasedAt}</p>
          {
            //Uncaught TypeError: Cannot read properties of null (reading 'toFixed') 오류가 발생하는 이유는 movie.averageScore 값이 null인 경우에 .toFixed() 메서드를 호출하려고 하기 때문입니다. 이 오류를 해결하기 위해서는 movie.averageScore 값이 null이 아닌 경우에만 .toFixed() 메서드를 사용하도록 조건을 추가해야 합니다.

            movie.averageScore !== null ? (
              <p>⭐️ {movie.averageScore.toFixed(1)}</p>
            ) : (
              <p>⭐️ 0.0</p>
            )
            //{averageScore}
          }
        </div>
      </div>
        </Link>
    </li>
     
              
  );
}
