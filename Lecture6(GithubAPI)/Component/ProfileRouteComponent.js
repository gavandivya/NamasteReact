import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileComponent = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  //   const getUserDetails = async () => {
  //     let fetchUrl = await fetch(`https://api.github.com/users/${id}`);
  //     let result = await fetchUrl.json();
  //     setUser(result);
  //     return result;
  //   };

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
      <div className="container-fluid mt-2" style={{ textAlign: "center" }}>
        <h4 className="login_id">{user}</h4>
        <div className="row">
          <div className="col-sm-12 col-md-6 mt-3">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${id}`}
              alt="ongoing-stat-divya"
              className="img-fluid"
            />
          </div>
          <div className="col-sm-12 col-md-6 mt-3">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${id}&layout=compact`}
              alt="ongoing-streak-divya"
              className="img-fluid"
            />
          </div>
          <div className="col-12 mt-3">
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
