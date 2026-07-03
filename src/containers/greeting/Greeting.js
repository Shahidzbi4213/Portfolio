import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const HERO_CHIPS = [
  {name: "Android", icon: "fab fa-android"},
  {name: "Kotlin", icon: "fab fa-kotlin"},
  {name: "Jetpack Compose", icon: "fas fa-cubes"},
  {name: "Kotlin Multiplatform", icon: "fas fa-sync"},
  {name: "Clean Architecture", icon: "fas fa-sitemap"}
];

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          {/* Left Side: Copy/Content & M3 Chips */}
          <div className="greeting-text-div">
            <div>
              <span className="hero-overline">MOBILE APP ENGINEER</span>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.username}
              </h1>

              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>

              {/* M3 Skill Chips */}
              <div className="hero-chips-container">
                {HERO_CHIPS.map((chip, idx) => (
                  <div key={idx} className="m3-assist-chip">
                    <i className={chip.icon}></i>
                    <span>{chip.name}</span>
                  </div>
                ))}
              </div>

              <div id="resume" className="empty-div"></div>

              <div className="social-links-hero">
                <SocialMedia />
              </div>

              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" variant="outline" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Compose Preview Canvas */}
          <div className="greeting-image-div">
            <div className="compose-preview-window">
              {/* Window Tab bar */}
              <div className="preview-window-header">
                <div className="tab-title">
                  <svg
                    className="compose-logo-mini"
                    viewBox="0 0 128 128"
                    fill="currentColor"
                  >
                    <path
                      d="M41.2 76.8a4 4 0 0 1-.5-1.3c.1.5.3.9.5 1.3zm.6.7c.2.2.5.4.7.5l18.9 10.6-18.9-10.6a2.9 2.9 0 0 1-.7-.5z"
                      opacity="0.3"
                    />
                    <path
                      d="M64.3 102h-.1a8.3 8.3 0 0 1-4-1L32 85.3c-1.7-.9-2.7-2.7-2.7-4.5V48.6c0-1.4.2-2.7.8-3.8L8.1 32.5C7.2 34.4 6.7 36.6 6.8 38.9v52.9a8.7 8.7 0 0 0 4.5 7.5L57.8 125.3c2.1 1.2 4.3 1.7 6.6 1.7V102z"
                      opacity="0.4"
                    />
                    <path
                      d="M30.1 44.8a7.2 7.2 0 0 1 2.8-3.1L59.4 26.2a8.1 8.1 0 0 1 8 0L94.3 41.3c1 .5 2 1.5 3 2.7l21.7-13a14.9 14.9 0 0 0-5-4.5L69.8 1.8a13.3 13.3 0 0 0-13.2.1L12.8 27.5a11.7 11.7 0 0 0-4.7 5l22 12.3z"
                      opacity="0.8"
                    />
                    <path
                      d="M119 31L97.3 43.9c.8 1.2 1.3 2.6 1.4 4.1v30.5c0 2.8-1.5 5.3-3.9 6.9L68.2 100.9a8.1 8.1 0 0 1-3.8 1.1V127c2.2 0 4.4-.5 6.6-1.8l43.8-25.6c4-2.4 6.5-6.7 6.5-11.4V37.8c0-2.4-.8-4.8-2.2-6.8z"
                      opacity="0.6"
                    />
                  </svg>
                  <span>ProfilePreview.kt</span>
                </div>
                <div className="preview-actions">
                  <span className="badge-preview">Interactive</span>
                  <i
                    className="fas fa-sync-alt action-icon"
                    title="Refresh"
                  ></i>
                </div>
              </div>

              {/* Interactive Canvas area */}
              <div className="preview-canvas">
                {/* Mock Mobile Device Frame */}
                <div className="mock-device">
                  {/* Status Bar */}
                  <div className="device-status-bar">
                    <span className="device-time">10:00 AM</span>
                    <div className="device-icons-group">
                      <i className="fas fa-wifi"></i>
                      <i className="fas fa-battery-full"></i>
                    </div>
                  </div>

                  {/* App Bar */}
                  <div className="device-app-bar">
                    <i className="fas fa-bars menu-btn-mock"></i>
                    <span className="device-title-text">Developer Profile</span>
                    <i className="fas fa-cog settings-btn-mock"></i>
                  </div>

                  {/* Device Screen Content */}
                  <div className="device-content">
                    {/* Hero Profile Block */}
                    <div className="mock-profile-card">
                      <div className="avatar-circle">
                        <span>SI</span>
                      </div>
                      <h4 className="mock-profile-name">Shahid Iqbal</h4>
                      <p className="mock-profile-title">Mobile App Engineer</p>

                      <div className="mock-status-pill">
                        <span className="status-dot"></span>
                        <span>Open for Opportunities</span>
                      </div>
                    </div>

                    {/* Skill Bars Card */}
                    <div className="mock-details-card">
                      <div className="card-header-mock">
                        <i className="fas fa-code header-icon-mock"></i>
                        <span>Primary Expertise</span>
                      </div>

                      <div className="mock-skill-row">
                        <div className="skill-meta-mock">
                          <span>Android & Kotlin</span>
                          <span>95%</span>
                        </div>
                        <div className="mock-progress-track">
                          <div
                            className="mock-progress-fill"
                            style={{width: "95%"}}
                          ></div>
                        </div>
                      </div>

                      <div className="mock-skill-row">
                        <div className="skill-meta-mock">
                          <span>Jetpack Compose</span>
                          <span>90%</span>
                        </div>
                        <div className="mock-progress-track">
                          <div
                            className="mock-progress-fill"
                            style={{width: "90%"}}
                          ></div>
                        </div>
                      </div>

                      <div className="mock-skill-row">
                        <div className="skill-meta-mock">
                          <span>Kotlin Multiplatform</span>
                          <span>80%</span>
                        </div>
                        <div className="mock-progress-track">
                          <div
                            className="mock-progress-fill"
                            style={{width: "80%"}}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Pills Mock */}
                    <div className="mock-nav-row">
                      <div className="mock-nav-pill active">Bio</div>
                      <div className="mock-nav-pill">Projects</div>
                      <div className="mock-nav-pill">Contact</div>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="device-home-indicator"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
