import { useState, useEffect } from "react";
import movieList from "../static/movieList.json"
import {useParams} from "react-router-dom"
import Loading from "./Loading";
import "./MovieDetail.css";
export default function MovieDetail() {
  //특정 영화 클릭시 해당 영화의 아이디가 담긴 상세경로로 이동
  //movie/:movieId
  //그리고 movieId라는 파라미터는 usePamans를 통해 얻은 
  //params객체의 프로퍼티로 접근할 수 있다. 
  //movieId를 통해 특정 영화의 상세 정보를 api로 요청한다. 
  
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  //const movieData = movieList.data[0]
  const [movieData,setMovieData] = useState(null);
  const MOVIE_DETAIL_API = `https://moviestates.codestates-seb.link/movies/${params.movieId}/detail` 
  useEffect(()=>{
      fetch(MOVIE_DETAIL_API)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
        console.log(data); // 이 위치에서 변수 data를 사용
      });
  }, []);
  console.log(params);
  
  return (
    movieData !== null ? 
    (<section>
      <img className="movie__poster" src={movieData.postImage} />
      <div className="movie__header">
        <h1>{movieData.title} </h1>
        
      </div>
       <div className="movie_average_relesed">
        <h3>개봉: {movieData.releasedAt}</h3>
        <h3>⭐️ {movieData.averageScore}</h3>
      </div>
      <div className="movie__genre">
        <h3>장르</h3>
        <div>
          {movieData.genres.map((genre) => (
            <div key={genre.id}>{genre.name}</div>
          ))}
        </div>
      </div>
      <div className="movie__staff">
        <h3>스태프</h3>
        <div>
          {movieData.staffs.map((staff) => (
            <div key={staff.id}>
              {staff.role}: {staff.name}
            </div>
          ))}
        </div>
      </div>
      <div className="movie__plot">
        <h3 onClick={() => setIsOpen(!isOpen)}>
          줄거리 {isOpen ? "🔼" : "🔽"}
        </h3>
        {isOpen && <p>{movieData.plot}</p>}
      </div>
    </section>)
    :
    (
      <Loading/>
    )
  );
}