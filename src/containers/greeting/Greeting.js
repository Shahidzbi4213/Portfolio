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

const renderChipIcon = (name, iconClass) => {
  const lowerName = name.toLowerCase();
  if (lowerName === "kotlin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m3-chip-svg"
      >
        <path d="M24 24H0V0h24L12 12Z" fill="currentColor" />
      </svg>
    );
  }
  if (lowerName === "kotlin multiplatform" || lowerName === "kmp") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m3-chip-svg"
      >
        <path
          d="M0 22.5629V0.0835311L22.4794 22.5629H0ZM0 25.4372V48H0.0572568L22.6201 25.4372H0ZM25.9906 22.0094L48 0H3.98128L25.9906 22.0094ZM26.0193 26.1028L4.1221 48H47.9164L26.0193 26.1028Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (lowerName === "jetpack compose") {
    return (
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m3-chip-svg"
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
  return <i className={iconClass}></i>;
};

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
                    {renderChipIcon(chip.name, chip.icon)}
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

                    {/* Primary Expertise Card */}
                    <div className="mock-details-card">
                      <div className="card-header-mock">
                        <i className="fas fa-code header-icon-mock"></i>
                        <span>Primary Expertise</span>
                      </div>

                      <div className="mock-list-item">
                        <div className="mock-list-item-icon bg-android">
                          <i className="fab fa-android"></i>
                        </div>
                        <div className="mock-list-item-content">
                          <span className="mock-list-item-title">
                            Android & Kotlin
                          </span>
                          <span className="mock-list-item-subtitle">
                            Core Architecture
                          </span>
                        </div>
                      </div>

                      <div className="mock-list-item">
                        <div className="mock-list-item-icon bg-compose">
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
                        </div>
                        <div className="mock-list-item-content">
                          <span className="mock-list-item-title">
                            Jetpack Compose
                          </span>
                          <span className="mock-list-item-subtitle">
                            Declarative UI
                          </span>
                        </div>
                      </div>

                      <div className="mock-list-item">
                        <div className="mock-list-item-icon bg-kmp">
                          <svg
                            viewBox="0 0 48 48"
                            fill="currentColor"
                            className="kmp-logo-mini"
                            style={{width: "12px", height: "12px"}}
                          >
                            <path d="M0 22.5629V0.0835311L22.4794 22.5629H0ZM0 25.4372V48H0.0572568L22.6201 25.4372H0ZM25.9906 22.0094L48 0H3.98128L25.9906 22.0094ZM26.0193 26.1028L4.1221 48H47.9164L26.0193 26.1028Z" />
                          </svg>
                        </div>
                        <div className="mock-list-item-content">
                          <span className="mock-list-item-title">
                            Kotlin Multiplatform
                          </span>
                          <span className="mock-list-item-subtitle">
                            Cross-Platform Logic
                          </span>
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
