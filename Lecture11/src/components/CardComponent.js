import { SocialMediaIcon as icon } from "../utils/socialMediaIcon";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext.js";

const CardComponent = ({ details }) => {
  const { login, followers, public_repos, location, company, avatar_url } =
    details;
  const { themeContext } = useContext(ThemeContext);

  return (
    <div className={`m-5`}>
      <div
        className={`card rounded-2xl ${themeContext === "dark"
          ? "text-white bg-slate-800"
          : "text-black bg-white"
          }`}
      >
        <img src={avatar_url} className="img-fluid" alt="avatar" />
        <div className="p-2">
          <Link to={`/app/profile/${login}`}>
            <h6 className={`font-bold`}>{login}</h6>
          </Link>
          <img className="mr-1" width={14} height={14} src={icon.org} />
          <small>{company ? company : "XYZ"}</small>
          <br />
          <img className="mr-1" width={12} height={12} src={icon.loc} />
          <small>{location ? location : "India"}</small>
          <br />
          <small>Followers - </small>
          <small>{followers ? followers : 0}</small>
          <br />
          <small>Total Repo - </small>
          <small>{public_repos ? public_repos : 0}</small>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
