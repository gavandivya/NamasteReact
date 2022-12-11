import { SocialMediaIcon as icon } from "../utils/socialMediaIcon";
import { Link } from "react-router-dom";

const CardComponent = ({ details }) => {
  const { login, followers, public_repos, location, company, avatar_url } =
    details;
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-xl mt-4">
      <div className="card">
        <img src={avatar_url} className="card-img-top img-fluid" alt="avatar" />
        <div className="card-body">
          <Link to={`/${login}`}>
            <h6>{login}</h6>
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
