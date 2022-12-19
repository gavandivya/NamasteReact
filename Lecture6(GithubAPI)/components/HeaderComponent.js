import { SocialMediaIcon as icon } from "../utils/socialMediaIcon";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const HeaderComponent = () => {
  const { themeContext, setThemeContext } = useContext(ThemeContext);

  let activeStyle = {
    textDecoration: "underline",
  };


  return (
    <nav className={`navbar ${themeContext === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <Link className="navbar-brand nav-link" href="#">
        <img
          className="d-inline-block align-top mr-4"
          width={40}
          src={icon.logo}
          alt="logo"
        />
        <span className="showTitle">{icon.title}</span>
      </Link>
      <div className="tabRight">
        <NavLink style={({ isActive }) =>
          isActive ? activeStyle : undefined
        } to="/SearchByCity" className="navbar-item nav-link">
          <span>Team</span>
        </NavLink >
        <NavLink style={({ isActive }) =>
          isActive ? activeStyle : undefined
        } to="/" className="navbar-item nav-link">
          <span>Github_Users</span>
        </NavLink >
        <i className={`${themeContext === "dark" ? "fa fa-sun" : "fa fa-moon"}`} onClick={() => setThemeContext(themeContext === "dark" ? "light" : "dark")}></i>
      </div>
    </nav >
  )
};

export default HeaderComponent;
