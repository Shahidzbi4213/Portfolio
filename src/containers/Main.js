import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import Footer from "../components/footer/Footer";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {applyTheme} from "../theme";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;
  const [isDark, setIsDark] = useLocalStorage(
    "isDark",
    darkPref ? darkPref.matches : false
  );
  const themeSeed = "#0B57D0";
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    applyTheme(themeSeed, isDark);
  }, [isDark]);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const changeSeed = () => {};

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider
        value={{
          isDark: isDark,
          changeTheme: changeTheme,
          themeSeed: themeSeed,
          changeSeed: changeSeed
        }}
      >
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <WorkExperience />
            <StartupProject />
            <Projects />
            <Education />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
