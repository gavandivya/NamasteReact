import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileComponent = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  //getting data from local storage instead of calling API
  const getUserDetails = async () => {
    let getArray = JSON.parse(sessionStorage.getItem("teamData"));
    getArray.map((member) => {
      if (id == member.login) {
        setUser(member.name);
      }
    });
  };

  return (
    <>
      <div className="mt-2" style={{ textAlign: "center" }}>
        <h4 className="font-bold text-xl text-white">{user}</h4>
        <div className="grid lg:grid-cols-2">
          <div className="mt-3">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${id}`}
              alt="ongoing-stat-divya"
              className="img-fluid"
            />
          </div>
          <div className="mt-3">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${id}&layout=compact`}
              alt="ongoing-streak-divya"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="mt-3">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs?username=${id}&layout=compact`}
              alt="ongoing-lang-divya"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
