import { SocialMediaIcon as icon } from "../utils/socialMediaIcon";
const HeaderComponent = () => (
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
      <img
        className="d-inline-block align-top mr-4"
        width={50}
        src={icon.logo}
        alt="logo"
      />
      {icon.title}
    </a>
  </nav>
);

export default HeaderComponent;
