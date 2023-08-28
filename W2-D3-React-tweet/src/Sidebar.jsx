import React from "react";
// TODO : React Router DOM의 Link 컴포넌트를 import 합니다.
import { Link, useNavigate } from "react-router-dom";

const MyBackButton = () => {
  const navigate = useNavigate(); //변수 할당시켜서 사용
  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };
  return <i onClick={onClickBtn} className="far fa-solid fa-arrow-left"></i>;
};

const Sidebar = () => {
  return (
    <section className="sidebar">
      {/* TODO : Link 컴포넌트를 작성하고, to 속성을 이용하여 경로(path)를 연결합니다. */}
      <Link to="/">
        <i className="far fa-comment-dots"></i>
      </Link>
      <Link to="/about">
        <i className="far fa-question-circle"></i>
      </Link>
      <Link to="/mypage">
        <i className="far fa-user"></i>
      </Link>
      <MyBackButton />
    </section>
  );
};

export default Sidebar;
