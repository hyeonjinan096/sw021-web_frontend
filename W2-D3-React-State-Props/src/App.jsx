import React from "react";
// TODO : React Router DOM을 설치 후, import 구문을 이용하여 BrowserRouter, Routes, Route 컴포넌트를 불러옵니다.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Tweets from "./Pages/Tweets";
// TODO : MyPage, About 컴포넌트를 import 합니다.
import MyPage from './Pages/MyPage';
import About from './Pages/About';

import "./App.css";
import "./global-style.css";


const App = (props) => {
  return (
    <BrowserRouter>
    <div className="App">
      <main>
        <Sidebar />
        <section className="features">
          {/* TODO : React Router DOM 설치 후 BrowserRouter, Routes, Route 컴포넌트를 적절하게 작성합니다. */}
          {/* Route 예시: <Route path="/" element={<Tweets />}></Route> */}
        <Routes>
                <Route path='/' element={<Tweets />} />
                <Route path='/about' element={<About />} />
                <Route path='/mypage' element={<MyPage />} />
        </Routes>
        </section>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;
