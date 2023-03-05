import "./topbar.css";
import profile from "../../Asssets/profile.jpg";
import { Link } from "react-router-dom";
function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topIcon topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link to="/login" className="link">
              {user ? "LOGOUT" : "LOGIN"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImage" src={profile} alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;
