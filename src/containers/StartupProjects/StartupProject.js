import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  const [activeCategory, setActiveCategory] = useState("ALL");

  if (!bigProjects.display) {
    return null;
  }

  const categories = [
    "ALL",
    ...new Set(
      bigProjects.projects.map(project => project.category).filter(Boolean)
    )
  ];

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="category-navigation">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={
                  activeCategory === category
                    ? `category-btn active ${isDark ? "dark-btn" : "light-btn"}`
                    : `category-btn ${isDark ? "dark-btn" : "light-btn"}`
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-container">
            {bigProjects.projects
              .filter(
                project =>
                  activeCategory === "ALL" ||
                  project.category === activeCategory
              )
              .map((project, i) => {
                const name = project.name || project.projectName;
                const desc = project.description || project.projectDesc;
                const icon = project.iconUrl || project.image;
                const category = project.category;
                const technologies = project.technologies || [];
                const playStoreUrl = project.playStoreUrl;
                const websiteUrl = project.websiteUrl;
                const footerLinks = project.footerLink || [];

                return (
                  <div
                    key={i}
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                  >
                    <div className="project-card-top">
                      {icon && (
                        <div className="project-icon-container">
                          <img
                            src={icon}
                            alt={`${name} icon`}
                            className="project-app-icon"
                          />
                        </div>
                      )}

                      {(category || project.needsMetadataReview) && (
                        <div className="project-meta">
                          {category && (
                            <span className="project-category">{category}</span>
                          )}
                          {project.needsMetadataReview && (
                            <span className="project-review-badge">
                              Review Needed
                            </span>
                          )}
                        </div>
                      )}

                      <h3
                        className={
                          isDark
                            ? "dark-mode project-card-title"
                            : "project-card-title"
                        }
                        dir="auto"
                      >
                        {name}
                      </h3>

                      <div className="project-body">
                        <p
                          className={
                            isDark
                              ? "dark-mode project-card-subtitle"
                              : "project-card-subtitle"
                          }
                          dir="auto"
                        >
                          {desc}
                        </p>

                        {technologies.length > 0 && (
                          <div className="project-tech-tags">
                            {technologies.map((tech, idx) => (
                              <span key={idx} className="tech-tag" title={tech}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="project-footer">
                      {playStoreUrl && (
                        <a
                          href={playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn playstore-btn"
                        >
                          <i
                            className="fab fa-google-play"
                            style={{marginRight: "6px"}}
                          ></i>
                          Play Store
                        </a>
                      )}
                      {websiteUrl && (
                        <a
                          href={websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn website-btn"
                        >
                          <i
                            className="fas fa-globe"
                            style={{marginRight: "6px"}}
                          ></i>
                          Website
                        </a>
                      )}
                      {/* Fallback for legacy footerLink structure if any */}
                      {!playStoreUrl &&
                        !websiteUrl &&
                        footerLinks.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn generic-btn"
                          >
                            {link.name}
                          </a>
                        ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
