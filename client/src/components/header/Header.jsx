import "./header.css";
import home from "../../Asssets/home.jpg";
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesSm">React & Node</span>
        <span className="headerTitlesLg">Blog</span>
      </div>
      <img className="headerImg" src={home} alt="" />
    </div>
  );
}

export default Header;
