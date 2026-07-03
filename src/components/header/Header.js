import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  bigProjects,
  educationInfo
} from "../../portfolio";
function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;
  const viewFeatured = bigProjects.display;
  const viewEducation = educationInfo.display;

  return (
    <Headroom>
      <header
        className={
          isDark ? "dark-menu header m3-top-app-bar" : "header m3-top-app-bar"
        }
      >
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills" className="m3-nav-item">
                Skills
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" className="m3-nav-item">
                Experience
              </a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education" className="m3-nav-item">
                Education
              </a>
            </li>
          )}
          {viewFeatured && (
            <li>
              <a href="#projects" className="m3-nav-item">
                Featured
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource" className="m3-nav-item">
                Open Source
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements" className="m3-nav-item">
                Achievements
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" className="m3-nav-item">
                Blogs
              </a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" className="m3-nav-item">
                Talks
              </a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume" className="m3-nav-item">
                Resume
              </a>
            </li>
          )}
          <li>
            <a href="#contact" className="m3-nav-item">
              Contact Me
            </a>
          </li>

          <li className="theme-toggle-li">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <span className="toggle-switch-wrapper">
              <ToggleSwitch />
            </span>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
