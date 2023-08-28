import './App.css'
import {Routes,Route,Link} from 'react-router-dom'


const Home = () => {
  return <main>Home 영역 입니다. </main>
}

const Mypage = () => {
  return <main>Mypage 영역 입니다. </main>
}

const Dashboard = () => {
  return <main>Dashboard 영역 입니다. </main>
}



export default function App() {
  return (
    <div>
      <header>
        <div>Codestates</div>
        <nav>
              <ul>
                <Link to ='/'><li>Home</li></Link>
                <Link to ='/mypage'><li>Mypage</li></Link>
                <Link to ='/dashboard'><li>Dashboard</li></Link>
              </ul>
        </nav>
      </header>

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      
      
     
    </div>
  )
}
