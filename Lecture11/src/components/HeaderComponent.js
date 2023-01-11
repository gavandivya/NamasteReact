import { SocialMediaIcon as icon } from "../utils/socialMediaIcon";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import ThemeContext from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { getUser } from "../store/loginSlice";

const HeaderComponent = () => {
  const { themeContext, setThemeContext } = useContext(ThemeContext);
  const userName = useSelector((store) => store.userLogin.userName);
  const image = useSelector((store) => store.userLogin.image);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  let activeStyle = {
    textDecoration: "underline",
  };

  const handleLogout = () => {
    dispatch(
      getUser({
        userName: "",
        file: "",
      })
    );
    navigation("/");
  };

  return (
    <nav
      className={`flex justify-between pt-2 ${
        themeContext === "dark"
          ? " text-slate-50 bg-slate-800"
          : " text-slate-800 bg-slate-50"
      }`}
    >
      <Link className="navbar-brand nav-link" href="#">
        <img className="inline-flex" width={40} src={icon.logo} alt="logo" />
        <span className="xsm:hidden font-bold text-2xl">{icon.title}</span>
      </Link>
      <div className="px-5">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/app/searchByCity"
          className="navbar-item nav-link"
        >
          <span className="p-2 m-2">Team</span>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/app"
          className="navbar-item nav-link"
        >
          <span className="p-2 m-2">Github_Users</span>
        </NavLink>
        <i
          className={`cursor-pointer ${
            themeContext === "dark"
              ? "fa fa-sun text-white"
              : "fa fa-moon text-slate-800"
          }`}
          onClick={() => {
            setThemeContext(themeContext === "dark" ? "light" : "dark");
            document.body.style.backgroundImage =
              themeContext === "dark"
                ? "linear-gradient(to right,rgb(211, 211, 211),rgb(82, 80, 80),#000)"
                : "linear-gradient(#000,#000)";
          }}
        ></i>

        <img src={image} alt="profile" className="h-8 w-8 rounded-full ml-10" />
        <small className="mx-2">({userName})</small>
        <i className="fas fa-sign-out-alt m-1" onClick={handleLogout}></i>
      </div>
    </nav>
  );
};

export default HeaderComponent;
