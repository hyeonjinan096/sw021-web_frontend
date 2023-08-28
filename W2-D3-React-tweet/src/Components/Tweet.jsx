import React from "react";
import "./Tweet.css";

const Tweet = ({ tweet, onDelete }) => {
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString("ko-kr");

  //삭제 기능
  //삭제 기능에 대한 이벤트 핸들러 함수 만들기
  //함수 내부에 들어가는 코드 -> 전체 트잇 배열을 업데이트하는 코드
  //특정 트윗만 없어지도록 배열을 필터링
  //트윗을 특정할 수 있는 정보->트윗 객체의 아이디
  //이벤트 헨들러 호출시에 해당 트윗의 id를 전달인자로 넣어 호출
  //해당 id를 가지고 배열을 필터링
  const handleDelete = () => {
    //tweets배열에서 id와 일치하는 요소만 필터링한 새로운 배열 만들기
    //필터링한 배열을 상태로 업데이트 한다.
    //setTweets(tweets.filter)
    onDelete(tweet.id);
  };

  return (
    <li className="tweet" id={tweet.id}>
      <div className="tweet__profile">
        <img src={tweet.picture} />
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            {tweet.username} {parsedDate}
          </div>
          {onDelete && (
            <button className="deleteButton" onClick={handleDelete}>
              <i class="fa-solid fa-trash-can"></i>
            </button>
          )}
        </div>
        <div className="tweet__message">{tweet.content}</div>
      </div>
    </li>
  );
};

export default Tweet;
