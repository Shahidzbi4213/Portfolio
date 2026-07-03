import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, variant}) {
  const buttonClass = variant === "outline" ? "main-button outlined-button" : "main-button";
  return (
    <div className={className}>
      <a className={buttonClass} href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
