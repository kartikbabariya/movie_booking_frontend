import './App.css';
import HomePage from './Component/HomePage/HomePage';
import MovieList from './Component/MovieList';
import MovieTimeScreen from './Component/MovieTimeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SeatArrangement from './Component/SeatArrangement';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import PrivateRoute from './utils/PrivateRoute';
import Admin from './Component/Admin';

function App() {
  return (
    <div className="App">

      {/* <BrowserRouter> */}
        <Routes>
          {/* <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/user/*" element={<Admin />} />
          </Route> */}
          <Route path="/" element={<MovieList />} />
          <Route path="/movieScreenList" element={<MovieTimeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bookMovie" element={<SeatArrangement />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
