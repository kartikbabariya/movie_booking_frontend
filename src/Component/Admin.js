import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import MovieTimeScreen from "./MovieTimeScreen";
import SeatArrangement from "./SeatArrangement";
import SignUp from "./SignUp";
import { useEffect } from "react";


const Admin = ({ isAuthenticated }) => {

  const location = useLocation();
  const navigate = useNavigate();
  console.log("-----", location.pathname); 
  useEffect(() => {
    if (
      location.pathname == "/" ||
      location.pathname == "/user" ||
      location.pathname == ""
    ) {
      // window.location.href = "/admin/dashboard";

      // window.history.pushState(null, null, "/admin/dashboar");
      window.location.reload(true);
      navigate("/user/movieScreenList");
    }
  }, []);

  return (
    <>
      <div className="mainAdmin">
        <Routes>
          <Route path="/movieScreenList" element={<MovieTimeScreen />} />
          <Route path="/bookMovie" element={<SeatArrangement />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
};

export default Admin;
