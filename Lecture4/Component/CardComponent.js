import { SocialMediaIcon as icon } from "../socialMediaIcon";
// import getImageUrl from "simple-image-cdn";

const CardComponent = ({ details }) => {
  const { profilePic, name, designation, location, github, linkedin, instagram, discord } = details;
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-xl mt-4">
      <div className="card" style={{ width: "11rem" }}>
        <img
          src={profilePic}
          className="card-img-top img-fluid"
          alt=""
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

//For converting to cdn
/*const src = getImageUrl(
  "https://drive.google.com/uc?export=view&id=1sfMYnY6cVsF8PuITK8V_2rsqhc9Zs3h0",
  { w: "176", h: "200", fit: "cover", q: 100 }
);

const src1 = getImageUrl(
  "https://drive.google.com/uc?export=view&id=1o9Ee8D3L1zQIGPR6rxvnAZae0UHQ9KsJ",
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

export default CardComponent;
