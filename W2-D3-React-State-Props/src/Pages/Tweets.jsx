// TODO : useState를 react로 부터 import 합니다.

import React ,{useState} from "react";
import Footer from "../Footer";
import Tweet from "../Components/Tweet";
import "./Tweets.css";
import dummyTweets from "../static/dummyData";

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  //인풋태그를 통해 이름값을 받아오는 상태
  //텍스트아리아 태그를 통해 트윗 내용을 받아오는 상태
  //Tweet
  const [tweets,setTweets] = useState(dummyTweets)
  const [username,setUsername]=useState('')
  const [content,setContent]=useState('')
  const handleButtonClick = (event) => {
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
    //사용자가 입력한 이름값과 내용값을 하나의 트윗객체에 담아서
    //해당 트윗배열에 추가한다.
    //해당 트윗목록을 상태로 만든다.-> 상태변경함수
    // 상태변경함수를 추가해서 tweet로 보낸다. 
    if(username!==''&&content!==''){
    const tweet =     
    {
    id: tweets.length + 1,
    username,
    picture: `https://randomuser.me/api/portraits/men/98.jpg`,
    content,
    createdAt: new Date().toLocaleDateString('ko-KR'),
    updatedAt: new Date().toLocaleDateString('ko-KR'),
  }
  console.log(tweet)
  setTweets([tweet,...tweets])
  setContent('');
  
    }
    else
  {
    alert('내용을 입력해주세요')
  }
  console.log(tweets)
  
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setUsername(event.target.value)
   
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setContent(event.target.value)
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  value ={username}
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange={handleChangeUser}
                ></input>
                {/*TODO : 트윗을 작성할 수 있는 textarea 엘리먼트를 작성하세요.*/}
                <textarea value={content} onChange={handleChangeMsg}
              className="tweetForm__input--message"
></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}                
                  {`total: ${tweets.filter(el => el.username === 'parkhacker').length}`}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
                
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button className ="tweetForm__submitButton" onClick={handleButtonClick}>Tweet</button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
      {tweets.map((tweet) => (
  <Tweet key={tweet.id} tweet={tweet} />
))}
      </ul>
    </React.Fragment>
  );
};

export default Tweets;
