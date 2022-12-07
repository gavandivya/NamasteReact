import { SocialMediaIcon as icon } from "../socialMediaIcon";
const HeaderComponent = () => (<nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
        <img
            className="d-inline-block align-top mr-4"
            width={50}
            src={icon.logo}
            alt="logo"
        />
        Brainy Fools
    </a>
</nav>);

export default HeaderComponent;