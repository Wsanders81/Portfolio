import React from "react";

const SocialShare = [
  { iconName: "linkedin-original", link: "https://dribbble.com/" },
  {
    iconName: "github-original-wordmark",
    link: "https://www.tiktok.com/",
  }
];
const Social = () => {
  return (
    <>
      <ul className="social social-default position-relative">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END social */}
    </>
  );
};

export default Social;
