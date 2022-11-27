import React from "react";
import { createRoot } from "react-dom/client";
import data from "./data.json";
import getImageUrl from "simple-image-cdn";

//Header
const HeaderComponent = () => {
  return (
    <>
      <CardComponent />
    </>
  );
};

const CardComponent = () => (
  <div className="container">
    <img
      className="mt-3"
      width={50}
      src="https://images.weserv.nl/?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Dview%26id%3D1ZN0OHfI7ngyLNIn0mDY36iFE2AewNMJ3&w=290&h=250&fit=cover&q=100"
      alt=""
    />
    <div className="row">
      {data.map((e) => (
        <div className="col mt-4">
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
              <a href="https://www.linkedin.com/in/divya-gavandi">
                <i>
                  <img
                    src="https://img.icons8.com/color/75/000000/linkedin.png"
                    alt=""
                  />
                </i>
              </a>
              <a href="https://www.instagram.com/gavandivya/">
                <i>
                  <img src="https://img.icons8.com/fluency/75/null/instagram-new.png" />
                </i>
              </a>
              <a href="https://discordapp.com/users/Divya#5041">
                <i>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/75/null/external-discord-chat-for-social-gaming-between-peers-logo-color-tal-revivo.png"
                  />
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
const src = getImageUrl(
  "https://drive.google.com/uc?export=view&id=1sfMYnY6cVsF8PuITK8V_2rsqhc9Zs3h0",
  { w: "176", h: "200", fit: "cover", q: 100 }
);
const src1 = getImageUrl(
  "https://drive.google.com/uc?export=view&id=1sfMYnY6cVsF8PuITK8V_2rsqhc9Zs3h0",
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

console.info(src);
console.info(src1);
console.info(src2);
console.info(src3);
console.info(src4);
console.info(src5);

