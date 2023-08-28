import React from 'react';
// TODO - import문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러옵니다.
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Link to='/'>
        <i className="far fa-comment-dots"></i>
      </Link>
      <Link to='/About'>
        <i className="far fa-regular fa-circle-question"></i>
      </Link>
      <Link to="/myPage">
        <i className="far fa-regular fa-user myPage"></i>
      </Link>

      {/* TODO : About 메뉴 아이콘과 Mypage 메뉴 아이콘을 작성하고 Link 컴포넌트를 이용하여 경로(path)를 연결합니다. */}

    </section>
  );
};

export default Sidebar;
