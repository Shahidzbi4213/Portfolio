import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const renderIcon = (skillName, className) => {
    const name = skillName.toLowerCase();

    if (name === "kotlin") {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="software-skill-svg"
        >
          <path d="M24 24H0V0h24L12 12Z" fill="currentColor" />
        </svg>
      );
    }

    if (name === "kotlin multiplatform") {
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="software-skill-svg"
        >
          <path
            d="M0 22.5629V0.0835311L22.4794 22.5629H0ZM0 25.4372V48H0.0572568L22.6201 25.4372H0ZM25.9906 22.0094L48 0H3.98128L25.9906 22.0094ZM26.0193 26.1028L4.1221 48H47.9164L26.0193 26.1028Z"
            fill="currentColor"
          />
        </svg>
      );
    }

    if (name === "compose multiplatform") {
      return (
        <svg
          viewBox="0 0 50 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="software-skill-svg"
        >
          <path
            d="M49 14V42L25 56L1 42V14L25 0L49 14Z"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M34.5 22.5V33.5L25 39V56L49 42V13.9998L34.5 22.5Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M25 39L15.5 33.5V22.5L1 14V42L25 56V39Z"
            fill="currentColor"
          />
          <path
            d="M15.5 22.5L25 17L34.5 22.5L49 14L25 0L1 14L15.5 22.5Z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M25 17L34.5 22.5V33.5L25 39L15.5001 33.5L15.5 22.5L25 17Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    }

    if (name === "jetpack compose") {
      return (
        <svg
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="software-skill-svg"
        >
          <path
            d="M41.226 76.778a4.002 4.002 0 0 1-.47-1.29c.09.452.25.887.47 1.29zm.578.713c.222.22.472.411.749.548l18.88 10.565-18.88-10.565a2.899 2.899 0 0 1-.747-.548z"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M64.342 101.967h-.14a8.301 8.301 0 0 1-4.014-1.016l-28.182-15.75c-1.663-.932-2.686-2.66-2.686-4.527V48.628c0-1.373.249-2.69.83-3.842L8.114 32.522c-.913 1.92-1.383 4.088-1.356 6.366v52.927a8.675 8.675 0 0 0 4.458 7.49l46.481 26.012c2.05 1.152 4.347 1.701 6.617 1.701v-.027c.055-3.32.028-16.628.028-25.023z"
            fill="currentColor"
            opacity="0.4"
          />
          <path
            d="M30.122 44.757a7.214 7.214 0 0 1 2.825-3.072l26.52-15.503a8.065 8.065 0 0 1 8.03-.082l26.798 15.009a8.993 8.993 0 0 1 3.018 2.743L118.99 31.04a14.913 14.913 0 0 0-4.955-4.5L69.766 1.764a13.32 13.32 0 0 0-13.233.137L12.765 27.472a11.704 11.704 0 0 0-4.651 5.049l22.009 12.236z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M118.962 31.04 97.285 43.852c.83 1.207 1.329 2.633 1.355 4.089v30.51a7.881 7.881 0 0 1-3.93 6.914L68.188 100.87a8.07 8.07 0 0 1-3.849 1.097c.029 8.369.029 21.677-.027 24.997v.027a13.533 13.533 0 0 0 6.617-1.812l43.769-25.599c4.07-2.387 6.562-6.723 6.506-11.415V37.817c-.028-2.442-.858-4.774-2.242-6.777z"
            fill="currentColor"
            opacity="0.6"
          />
        </svg>
      );
    }

    return <i className={className}></i>;
  };

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {renderIcon(skills.skillName, skills.fontAwesomeClassname)}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
