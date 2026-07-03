import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const SKILL_CATEGORIES = [
  {
    title: "Native Android Engineering",
    desc: "Building scalable, maintainable, and high-performance native applications using Kotlin and Google's recommended architecture patterns.",
    bullets: [
      "Modular Clean Architecture with MVVM / MVI patterns",
      "Robust offline-first data layers using Room and SQLite",
      "Reactive stream management with Kotlin Flow & Coroutines"
    ],
    skills: ["Android", "Kotlin", "Java", "SQLite"],
    icon: "fab fa-android"
  },
  {
    title: "Kotlin Multiplatform (KMP/CMP)",
    desc: "Architecting shared core business logic and user interfaces across Android, iOS, Desktop, and Web with native performance.",
    bullets: [
      "Cross-platform data persistence and network client sharing",
      "Unified UI development via Compose Multiplatform",
      "Platform-specific API integration and native bridging"
    ],
    skills: ["Kotlin", "Kotlin Multiplatform", "Compose Multiplatform"],
    icon: "fas fa-sync-alt"
  },
  {
    title: "Modern Declarative UI Systems",
    desc: "Creating beautiful, responsive, and performant user interfaces following Material Design 3 guidelines.",
    bullets: [
      "Dynamic theming and adaptive grid system layouts",
      "State-driven animations and interactive components",
      "Jetpack Compose and Swift UI integration"
    ],
    skills: ["Jetpack Compose", "Compose Multiplatform", "Swift"],
    icon: "fas fa-paint-brush"
  },
  {
    title: "Backend & Ecosystem Integration",
    desc: "Integrating Firebase cloud services, secure authentication, and modern networking client architectures.",
    bullets: [
      "RESTful API & GraphQL query optimization",
      "Real-time database sync and push notification routing",
      "Git workflows and Play Store publication builds"
    ],
    skills: ["Firebase", "Git", "GitHub"],
    icon: "fas fa-cloud"
  }
];

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-heading-div">
        <Fade bottom duration={1000}>
          <h1
            className={isDark ? "dark-mode skills-heading" : "skills-heading"}
          >
            {skillsSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle skills-text-subtitle"
                : "subTitle skills-text-subtitle"
            }
          >
            {skillsSection.subTitle}
          </p>
        </Fade>
      </div>

      <div className="skills-main-div">
        <div className="skills-grid-container">
          {SKILL_CATEGORIES.map((category, idx) => (
            <Fade bottom duration={1000} delay={idx * 150} key={idx}>
              <div className="m3-engineering-card">
                {/* Card Header */}
                <div className="eng-card-header">
                  <div className="eng-card-icon-container">
                    <i className={category.icon}></i>
                  </div>
                  <h3 className="eng-card-title">{category.title}</h3>
                </div>

                {/* Card Description */}
                <p className="eng-card-desc">{category.desc}</p>

                {/* Card Bullets */}
                <ul className="eng-card-bullets">
                  {category.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="eng-bullet-item">
                      <span className="bullet-dot"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Associated Tech Tags */}
                <div className="eng-card-tags">
                  <span className="tags-label">Technologies:</span>
                  <SoftwareSkill filterSkills={category.skills} />
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
