import React from "react";
import { createRoot } from "react-dom/client";
import data from "./data.json";
import getImageUrl from "simple-image-cdn";

//Header
const HeaderComponent = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            className="d-inline-block align-top mr-4"
            width={50}
            src="https://images.weserv.nl/?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Dview%26id%3D1ZN0OHfI7ngyLNIn0mDY36iFE2AewNMJ3&w=290&h=250&fit=cover&q=100"
            alt=""
          />
          Brainy Fools
        </a>
        {/* <form className="form-inline">
          <input
            className="form-control mr-sm-2 search"
            type="search"
            placeholder="Search"
          />
          <button className="btn my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> */}
      </nav>
      <CardComponent />
    </>
  );
};

const CardComponent = () => (
  <div className="container">
    {/* <img
      className="mt-3"
      width={50}
      src="https://images.weserv.nl/?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Dview%26id%3D1ZN0OHfI7ngyLNIn0mDY36iFE2AewNMJ3&w=290&h=250&fit=cover&q=100"
      alt=""
    /> */}
    <div className="row" style={{ textAlign: "center" }}>
      {data.map((e) => (
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl mt-4">
          <div className="card" style={{ width: "11rem" }}>
            <img src={e.profilePic} className="card-img-top img-fluid" alt="" />
            <div className="card-body">
              <h6>{e.name}</h6>
              <img
                className="mr-1"
                width={14}
                height={14}
                src="https://img.icons8.com/plasticine/100/null/business-buildings.png"
              />
              <small>{e.designation}</small>
              <br />
              <img
                className="mr-1"
                width={12}
                height={12}
                src="https://img.icons8.com/fluency/48/null/marker.png"
              />
              <small>{e.location}</small>
            </div>
            <div className="icons card-footer">
              <a href={e.linkedin} target="_blank">
                <i>
                  <img
                    src="https://img.icons8.com/color/75/000000/linkedin.png"
                    alt=""
                  />
                </i>
              </a>
              <a href={e.instagram} target="_blank">
                <i>
                  <img src="https://img.icons8.com/fluency/75/null/instagram-new.png" />
                </i>
              </a>
              <a href={e.discord} target="_blank">
                <i>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/75/null/external-discord-chat-for-social-gaming-between-peers-logo-color-tal-revivo.png"
                  />
                </i>
              </a>
              <a href={e.github} target="_blank">
                <i>
                  <img src="https://img.icons8.com/ios-glyphs/75/null/github.png" />
                </i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// const Card1Component = () => {
//   return data.map((e) => {
//     return (
//       <>
//         <p>{e.profilePic}</p>
//         <p>{e.designation}</p>
//         <p>{e.experience}</p>
//         <p>{e.name}</p>
//       </>
//     );
//   });
// };

const root = createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

//For converting to cdn
/*const src = getImageUrl(
  "https://drive.google.com/uc?export=view&id=1sfMYnY6cVsF8PuITK8V_2rsqhc9Zs3h0",
  { w: "176", h: "200", fit: "cover", q: 100 }
);
const src1 = getImageUrl(
  "https://drive.google.com/uc?export=view&id=1AYXXFRrI7Ebryw4Q_Yo-VPQDuL9DEdgg",
  { w: "176", h: "200", fit: "cover", q: 100 }
);
const src2 = getImageUrl(
  "https://drive.google.com/uc?export=view&id=1FU75q7qFlqS89Ob8hdt9hOJOfpJFtfFz",
  { w: "176", h: "200", fit: "cover", q: 100 }
);
const src3 = getImageUrl(
  "https://drive.google.com/uc?export=view&id=176heZu552Ht49GdFfVIS9alXn0Xp43kt",
  { w: "176", h: "200", fit: "cover", q: 100 }
);
const src4 = getImageUrl(
  "https://drive.google.com/uc?export=view&id=1wRpKCNQ_mhAr_8qJXqZ1hMYEfzfJNGQn",
  { w: "176", h: "200", fit: "cover", q: 100 }
);
const src5 = getImageUrl(
  "https://drive.google.com/uc?export=view&id=1ZN0OHfI7ngyLNIn0mDY36iFE2AewNMJ3",
  { w: "280", h: "250", fit: "cover", q: 100 }
);

const src6 = getImageUrl(
  "https://drive.google.com/uc?export=view&id=1QaO6elNUIA1yUCMvgPU3_wAKwwE2QAlx",
  { w: "280", h: "250", fit: "cover", q: 100 }
);

const src7 = getImageUrl(
  "https://drive.google.com/uc?export=view&id=10sR3gQHDY_yZfa_4v5RGNOf8FUt4HANt",
  { w: "280", h: "250", fit: "cover", q: 100 }
);

const src8 = getImageUrl(
  "https://drive.google.com/uc?export=view&id=1HlnEe5PclQmhkaTNvJitMern1Kahn_-m",
  { w: "280", h: "250", fit: "cover", q: 100 }
);

const src9 = getImageUrl(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg",
  { w: "280", h: "250", fit: "cover", q: 100 }
);

const src10 = getImageUrl(
  "https://drive.google.com/uc?export=view&id=1xE_rdfCRvcTk0aA5ToHC6cI46WFGwl9K",
  { w: "280", h: "250", fit: "cover", q: 100 }
);
const src11 = getImageUrl(
  "https://drive.google.com/uc?export=view&id=1KbEFMU4fFuVXy4-UFaAV6lpRujGPOnNm",
  { w: "280", h: "250", fit: "cover", q: 100 }
);

*/

