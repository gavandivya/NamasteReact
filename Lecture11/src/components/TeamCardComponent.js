import { useContext } from "react";
import { SocialMediaIcon as icon } from "../utils/socialMediaIcon";
import ThemeContext from "../context/ThemeContext";

const TeamCardComponent = ({ details }) => {
    const { profilePic, name, designation, location, github, linkedin, instagram, discord } = details;
    const { themeContext } = useContext(ThemeContext);
    return (
        <div className={`m-5`}>
            <div className={`card rounded-lg m-2 ${themeContext === "dark" ? "text-slate-50 bg-slate-900" : "text-slate-900 bg-slate-50"}`} style={{ width: "11rem" }}>
                <img
                    src={profilePic}
                    className="card-img-top img-fluid"
                    alt="profilePic"
                />
                <div className="card-body">
                    <h6 className="font-bold">{name}</h6>
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
