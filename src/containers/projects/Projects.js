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
      fetch(process.env.PUBLIC_URL + "/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          const user = response.data.user;
          const edges =
            (user.repositories && user.repositories.edges) ||
            (user.pinnedItems && user.pinnedItems.edges) ||
            [];
          // Display the top 4 or top 5 open-source projects consistently
          setrepoFunction(edges.slice(0, 5));
        })
        .catch(function (error) {
          console.warn(
            "Could not fetch profile.json, falling back to static repositories list:",
            error
          );
          setrepoFunction([
            {
              node: {
                id: "repo-geoqibla",
                name: "GeoQibla",
                description:
                  "GeoQibla is a Kotlin Multiplatform library for Android and iOS that provides accurate Qibla direction using geolocation and device sensors, enabling shared business logic with native performance and sensor integration.",
                url: "https://github.com/Shahidzbi4213/GeoQibla",
                forkCount: 0,
                stargazers: {
                  totalCount: 3
                },
                diskUsage: 1938,
                primaryLanguage: {
                  name: "Kotlin",
                  color: "#F18E33"
                },
                logoUrl:
                  "https://shahidzbi4213.github.io/GeoQibla/assets/geoqibla-icon.svg"
              }
            },
            {
              node: {
                id: "repo-wallpaper",
                name: "WallpaperApp-Cmp",
                description:
                  "A beautiful Wallpaper application built with Kotlin Multiplatform and Compose Multiplatform for Android and iOS.",
                url: "https://github.com/Shahidzbi4213/WallpaperApp-Cmp",
                forkCount: 0,
                stargazers: {
                  totalCount: 19
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
                id: "repo-screeny-compose",
                name: "Screeny-Compose",
                description:
                  "A wallpaper application using Jetpack Compose and Pexels API.",
                url: "https://github.com/Shahidzbi4213/Screeny-Compose",
                forkCount: 0,
                stargazers: {
                  totalCount: 15
                },
                diskUsage: 1500,
                primaryLanguage: {
                  name: "Kotlin",
                  color: "#F18E33"
                }
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
                  totalCount: 19
                },
                diskUsage: 850,
                primaryLanguage: {
                  name: "Kotlin",
                  color: "#F18E33"
                },
                logoUrl: "/apps/default-reels-logo.jpg"
              }
            },
            {
              node: {
                id: "repo-onetapgoogle",
                name: "OneTapGoogle",
                description:
                  "OneTap Google Sign-In helper library for authentication implementation.",
                url: "https://github.com/Shahidzbi4213/OneTapGoogle",
                forkCount: 0,
                stargazers: {
                  totalCount: 10
                },
                diskUsage: 500,
                primaryLanguage: {
                  name: "Kotlin",
                  color: "#F18E33"
                }
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
