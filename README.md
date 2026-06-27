# Shahid Iqbal | Senior Mobile Application & Kotlin Multiplatform Engineer 🚀

Welcome to the repository of my personal portfolio website. This site serves as a showcase of my professional experience, featured mobile applications published on the Google Play Store, open-source libraries, tech stack, and blog posts.

🌐 **Live Portfolio:** [shahidzbi4213.github.io/Portfolio](https://shahidzbi4213.github.io/Portfolio/)

---

## 🛠️ Core Technology Stack & Skills

- **Languages:** Kotlin, Java, Swift, JavaScript, HTML/CSS
- **Frameworks & Toolkits:** Jetpack Compose, Compose Multiplatform (CMP), Kotlin Multiplatform (KMP), Android SDK, iOS development
- **Architecture & Best Practices:** Clean Architecture, MVVM, MVI, Modularization, Offline-first architectures, Dependency Injection (Hilt, Koin)
- **APIs & Services:** REST APIs, GraphQL, Firebase Services, Push Notifications, Local Databases (SQLite, Room, SQLDelight)
- **DevOps & Tooling:** Git, GitHub Actions, Docker, CI/CD Automations

---

## 📱 Featured Production Apps (Google Play Store)

Some of the production-ready applications I've developed and collaborated on:

1. **Quran - Mushaf Makkah (مصحـف مكة)**
   - *Description:* Comprehensive Quran app featuring 100+ reciters, 35 interpretations, and 50 translations.
   - *Tech:* Kotlin, Android SDK, Audio Playback rendering, Local Caching.
2. **Telawa Hafs Quran (مصحف التلاوة)**
   - *Description:* Advanced Quran reading and audio streaming application.
   - *Tech:* Kotlin, Jetpack Compose, ExoPlayer/Media3.
3. **Kids Quran (مصحف الأطفال القرآن)**
   - *Description:* Interactive educational application for alphabet learning and memorization.
   - *Tech:* Kotlin, Android SDK, Jetpack Compose, Interactive Audio APIs.
4. **Time Warp Scan: Face Scanner**
   - *Description:* Entertainment app rendering funny warps and video distortion filters.
   - *Tech:* Kotlin, CameraX, Custom Image Processing, distorters.

---

## 📦 Open Source Libraries & Projects

I actively contribute to the open-source community. Here are some featured libraries and projects:

- **[GeoQibla](https://github.com/Shahidzbi4213/GeoQibla)**
  - *Description:* A Kotlin Multiplatform (KMP) Compose library designed to calculate Qibla direction, manage location services, and integrate compass sensor functionality dynamically.
- **[WallpaperApp-Cmp](https://github.com/Shahidzbi4213/WallpaperApp-Cmp)**
  - *Description:* A beautiful wallpaper application built with Compose Multiplatform for Android and iOS.
- **[SampleReelsApp](https://github.com/Shahidzbi4213/SampleReelsApp)**
  - *Description:* Seamless short video playback player using Jetpack Compose and ExoPlayer/Media3.
- **[Screeny-Compose](https://github.com/Shahidzbi4213/Screeny-Compose)**
  - *Description:* Wallpaper app integrated with Pexels API using modern Compose practices.
- **[OneTapGoogle](https://github.com/Shahidzbi4213/OneTapGoogle)**
  - *Description:* Android authentication helper utility wrapper for Google's OneTap Sign-In system.

---

## 💻 Portfolio Local Setup & Development

This portfolio is built on React.js and utilizes the GitHub GraphQL API to fetch repository details and RSS feed endpoints for Medium blogs.

### Prerequisites

- Node.js (v18.x recommended)
- npm (v9.x or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shahidzbi4213/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_GITHUB_TOKEN = "YOUR_GITHUB_PERSONAL_ACCESS_TOKEN"
   GITHUB_USERNAME = "Shahidzbi4213"
   USE_GITHUB_DATA = "false"
   MEDIUM_USERNAME = "shahid.iqbal4213"
   ```

4. **Start the local development server:**
   ```bash
   npm start
   ```

5. **Format codebase:**
   ```bash
   npm run format
   ```

---

## 🚀 Deployment

The portfolio has automated deployment configured with GitHub Actions (`.github/workflows/deploy.yml`). Pushing changes to the `master` branch will trigger the build and update the `gh-pages` branch.

To deploy manually from your machine:
```bash
npm run deploy
```

---

## ✉️ Contact Me

Feel free to reach out if you'd like to discuss a project or collaborate:

- **Email:** shahid.iqbal4213@gmail.com
- **LinkedIn:** [linkedin.com/in/shahidzbi](https://www.linkedin.com/in/shahidzbi/)
- **Medium Articles:** [medium.com/@shahid.iqbal4213](https://medium.com/@shahid.iqbal4213)
- **Twitter / X:** [@shahidzbi](https://x.com/shahidzbi)
