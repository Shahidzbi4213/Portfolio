import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          {/* Centered M3 Elevated Card */}
          <div className="m3-contact-card">
            <div className="contact-card-header">
              <div className="contact-badge">
                <i className="fas fa-paper-plane"></i>
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="contact-title">{contactInfo.title}</h2>
              <p
                className={
                  isDark
                    ? "dark-mode contact-subtitle"
                    : "subTitle contact-subtitle"
                }
              >
                {contactInfo.subtitle}
              </p>
            </div>

            <div className="contact-card-actions">
              {/* Primary Email CTA Styled as M3 Filled Button */}
              <a
                className="m3-filled-btn email-cta"
                href={`mailto:${contactInfo.email_address}`}
                aria-label={`Send email to ${contactInfo.email_address}`}
              >
                <i className="fas fa-envelope"></i>
                <span>Email me</span>
              </a>
            </div>

            <div className="contact-card-divider"></div>

            <div className="contact-card-footer">
              <span className="footer-sub-label">
                Connect across professional networks
              </span>
              <div className="social-links-container">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
