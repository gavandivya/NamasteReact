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
    <nav className={`flex justify-between pt-2 ${themeContext === "dark" ? " text-slate-50 bg-slate-800" : " text-slate-800 bg-slate-50"}`}>
      <Link className="navbar-brand nav-link" href="#">
        <img
          className="inline-flex"
          width={40}
          src={icon.logo}
          alt="logo"
        />
        <span className="xsm:hidden font-bold text-2xl">{icon.title}</span>
      </Link>
      <div className="px-5">
        <NavLink style={({ isActive }) =>
          isActive ? activeStyle : null
        } to="/searchByCity" className="navbar-item nav-link">
          <span className="p-2 m-2">Team</span>
        </NavLink >
        <NavLink style={({ isActive }) =>
          isActive ? activeStyle : null
        } to="/" className="navbar-item nav-link">
          <span className="p-2 m-2">Github_Users</span>
        </NavLink >
        <i className={`cursor-pointer ${themeContext === "dark" ? "fa fa-sun text-white" : "fa fa-moon text-slate-800"}`} onClick={() => {
          setThemeContext(themeContext === "dark" ? "light" : "dark");
          document.body.style.backgroundImage = themeContext === "dark" ? "linear-gradient(to right,rgb(211, 211, 211),rgb(82, 80, 80),#000)" : "linear-gradient(#000,#000)";
        }}></i>
      </div>
    </nav >
  )
};

export default HeaderComponent;
