import { useContext } from "react";
import { SocialMediaIcon as icon } from "../utils/socialMediaIcon";
import ThemeContext from "../context/ThemeContext";

const TeamCardComponent = ({ details }) => {
    const { profilePic, name, designation, location, github, linkedin, instagram, discord } = details;
    const { themeContext } = useContext(ThemeContext);
    return (
        <div className={`col-sm-6 col-md-4 col-lg-3 col-xl mt-4`}>
            <div className={`card ${themeContext === "dark" ? "darkbg" : "lightbg"}`} style={{ width: "11rem" }}>
                <img
                    src={profilePic}
                    className="card-img-top img-fluid"
                    alt="profilePic"
                />
                <div className="card-body">
                    <h6>{name}</h6>
                    <img className="mr-1" width={14} height={14} src={icon.org} />
                    <small>{designation}</small>
                    <br />
                    <img className="mr-1" width={12} height={12} src={icon.loc} />
                    <small>{location}</small>
                </div>
                <div className="icons card-footer">
                    <a href={linkedin} target="_blank">
                        <i>
                            <img src={icon.linkedin} alt="linked_in" />
                        </i>
                    </a>
                    <a href={github} target="_blank">
                        <i>
                            <img src={icon.github} alt="github" />
                        </i>
                    </a>
                    <a href={instagram} target="_blank">
                        <i>
                            <img src={icon.instagram} alt="instagram" />
                        </i>
                    </a>
                    <a href={discord} target="_blank">
                        <i>
                            <img src={icon.discord} alt="discord" />
                        </i>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default TeamCardComponent;
