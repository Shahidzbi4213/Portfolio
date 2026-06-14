import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.warn(
            "Could not fetch profile.json, falling back to static repositories list:",
            error
          );
          setrepoFunction([
            {
              node: {
                id: "repo-wallpaper",
                name: "WallpaperApp-Cmp",
                description:
                  "A beautiful Wallpaper application built with Kotlin Multiplatform and Compose Multiplatform for Android and iOS.",
                url: "https://github.com/Shahidzbi4213/WallpaperApp-Cmp",
                forkCount: 0,
                stargazers: {
                  totalCount: 1
                },
                diskUsage: 1200,
                primaryLanguage: {
                  name: "Kotlin",
                  color: "#F18E33"
                },
                logoUrl:
                  "https://raw.githubusercontent.com/Shahidzbi4213/WallpaperApp-Cmp/main/iosApp/iosApp/Assets.xcassets/AppIcon.appiconset/app-icon-1024.png"
              }
            },
            {
              node: {
                id: "repo-reels",
                name: "Reels Library",
                description:
                  "An interactive video reels application built using Jetpack Compose and ExoPlayer/Media3 for seamless short video playback.",
                url: "https://github.com/Shahidzbi4213/SampleReelsApp",
                forkCount: 0,
                stargazers: {
                  totalCount: 2
                },
                diskUsage: 850,
                primaryLanguage: {
                  name: "Kotlin",
                  color: "#F18E33"
                },
                logoUrl: "/apps/default-reels-logo.jpg"
              }
            }
          ]);
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
