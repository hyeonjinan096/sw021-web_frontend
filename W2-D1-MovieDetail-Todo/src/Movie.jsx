import movieData from "./movieData";
import {useState} from "react";

export default function Movie() {
  //useState로 상태를 만든다. -> 보이니 안보이니 ->isshow
  //isshow가 true라면 줄거리가 보이고 
  //isshow가 false면 줄거리가 보이지 않도록 만든다. 
  //isShow는 줄거리라는 텍스트를 선택하면 t->f f->t
  //클릭 이벤트를 실행한다. 
  //isShow라는 상태를 만들기  -> 클릭하면 isShow상태 변경
  //조건부 렌더링을 구현해야함 -> 삼항연산자
  const [isShow, setIsShow] = useState(false);//초기 안보이게
  const toggle =() =>{
    //isShow를 반대 상태로 update한다. 
    setIsShow(!isShow); //isShow의 반대 상태 
  }
  return (
    <section>
      <img
        className="movie__poster"
        src={movieData.postImage}
      />
      <div className="movie__header">
        <h1>{movieData.title}</h1>
        <h3>⭐️ {movieData.averageScore}</h3>
      </div>
      <div className="movie__genre">
        <h3>장르</h3>
        <div>
          {movieData.genres.map((genres)=><div>{genres.name}</div>)}
          
        </div>
      </div>
      <div className="movie__staff">
        <h3>스태프</h3>
        <div>
          {movieData.staffs.map((staffs)=>
        <div>{staffs.role}:{staffs.name}</div>
      )}
        </div>
      </div>
      <div className="movie__plot">
        <h3 onClick ={toggle}>줄거리🔽</h3> 
         {isShow && <p>{movieData.plot}</p>}
         {/*isShow ? <p>{movieData.plot}</p> : <></> */}
      </div>
    </section>
  );
}
