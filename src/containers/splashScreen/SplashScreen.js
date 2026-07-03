import React, {useContext, useState, useEffect} from "react";
import "./SplashScreen.css";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const PIPELINE_STEPS = [
  {id: "kotlin", name: "Kotlin", status: "Compiling business logic..."},
  {id: "compose", name: "Compose", status: "Inflating UI components..."},
  {id: "kmp", name: "KMP / CMP", status: "Linking multiplatform binaries..."},
  {id: "android", name: "Android", status: "Packaging APK / App Bundle..."},
  {id: "ship", name: "Ship 🚀", status: "Ready to deploy!"}
];

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 1800; // Total loading animation duration (matching portfolio.js limit)
    const stepDuration = totalDuration / PIPELINE_STEPS.length;

    // Interval to advance steps
    const stepInterval = setInterval(() => {
      setCurrentStepIdx(prev => {
        if (prev < PIPELINE_STEPS.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, stepDuration);

    // Interval to advance fine-grained progress bar percentage
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          return prev + 2;
        }
        clearInterval(progressInterval);
        return 100;
      });
    }, totalDuration / 50);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-card">
        {/* Top Header / Window controls like a IDE / Compose Preview window */}
        <div className="splash-card-header">
          <div className="window-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="window-title">Gradle Build running...</div>
        </div>

        <div className="splash-card-body">
          {/* Main compilation visual */}
          <div className="pipeline-visual">
            {PIPELINE_STEPS.map((step, idx) => {
              const isActive = idx === currentStepIdx;
              const isCompleted = idx < currentStepIdx;

              let stepClass = "pipeline-step";
              if (isActive) stepClass += " active";
              if (isCompleted) stepClass += " completed";

              return (
                <div key={step.id} className={stepClass}>
                  <div className="step-node">{isCompleted ? "✓" : idx + 1}</div>
                  <span className="step-label">{step.name}</span>
                </div>
              );
            })}
          </div>

          {/* Current compiling status text */}
          <div className="compiling-status">
            <div className="status-title">
              {PIPELINE_STEPS[currentStepIdx].status}
            </div>
            <div className="progress-percentage">{progress}%</div>
          </div>

          {/* Custom M3 progress track */}
          <div className="m3-progress-track">
            <div
              className="m3-progress-indicator"
              style={{width: `${progress}%`}}
            ></div>
          </div>
        </div>

        <div className="splash-card-footer">
          <span className="developer-tag">&lt;{greeting.username} /&gt;</span>
        </div>
      </div>
    </div>
  );
}
