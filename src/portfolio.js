/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shahid Iqbal",
  title: "Hi all, I'm Shahid",
  subTitle: emoji(
    "A passionate Mobile App Engineer 🚀 specializing in building robust and high-performance Android applications using Kotlin, Jetpack Compose, Java, and Kotlin Multiplatform / Compose Multiplatform (KMP/CMP)."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shahidzbi4213",
  linkedin: "https://www.linkedin.com/in/shahidzbi/",
  gmail: "shahid.iqbal4213@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@shahid.iqbal4213",
  stackoverflow: "https://stackoverflow.com/users/12536083/shahid-iqbal",
  instagram: "https://instagram.com/shahid__iqbal",
  twitter: "https://x.com/shahidzbi",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Senior Android & Kotlin Multiplatform Engineer Building Scalable, High-Performance Mobile Experiences",
  skills: [
    emoji(
      "⚡ Build scalable, maintainable, and high-performance Android applications using Kotlin, Jetpack libraries, modern architecture patterns, and Google's recommended best practices."
    ),
    emoji(
      "⚡ Develop shared business logic across Android, iOS, Desktop, and Web platforms using Kotlin Multiplatform while preserving native platform experiences."
    ),
    emoji(
      "⚡ Create beautiful, responsive, and performant user interfaces using Jetpack Compose and Compose Multiplatform following Material Design 3 principles."
    ),
    emoji(
      "⚡ Integrate Firebase services, REST APIs, GraphQL, authentication systems, cloud services, analytics, local databases, and push notification platforms."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-kotlin"
    },
    {
      skillName: "Kotlin Multiplatform",
      fontAwesomeClassname: "kmp-icon"
    },
    {
      skillName: "Compose Multiplatform",
      fontAwesomeClassname: "cmp-icon"
    },
    {
      skillName: "Jetpack Compose",
      fontAwesomeClassname: "compose-icon"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "SQLite",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Swabi",
      logo: require("./assets/images/uoswabiLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2017 - 2021",
      desc: "Specialized in Software Engineering and Mobile Development.",
      descBullets: [
        "Graduated with a deep understanding of Data Structures, Algorithms, and Object-Oriented Programming.",
        "Developed multiple Android application projects as part of academic coursework."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android/Kotlin Development", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "UI Design & Jetpack Compose",
      progressPercentage: "90%"
    },
    {
      Stack: "Kotlin Multiplatform (KMP/CMP)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile Application Developer (Remote)",
      company: "SmarTech IT Solutions",
      companylogo: require("./assets/images/smartechLogo.png"),
      companyUrl: "https://smartech.online",
      date: "Feb 2025 – Present",
      desc: "Leading cross-platform mobile development using Kotlin Multiplatform (KMP), targeting Android, iOS, and future scalable platforms.",
      descBullets: [
        "Designing and building native Android applications using Kotlin, Jetpack Compose, and modern Clean Architecture.",
        "Developing and maintaining shared Kotlin Multiplatform (KMP) business logic to ensure high code reuse across iOS and Android.",
        "Architecting modular libraries and integrating REST APIs, Room database, and lifecycle components for robust offline-first functionality."
      ]
    },
    {
      role: "Android Engineer (Onsite)",
      company: "Funsol Technologies (Pvt). Ltd",
      companylogo: require("./assets/images/funsolLogo.png"),
      companyUrl: "https://funsoltech.com",
      date: "May 2023 – January 2025",
      desc: "Architected and sustained high-performance, intuitive, and scalable Android applications.",
      descBullets: [
        "Spearheaded greenfield development and optimized legacy applications using modern Android SDKs and architecture components.",
        "Orchestrated seamless integration of RESTful APIs, Firebase services, and push notifications to deliver real-time data synchronization.",
        "Collaborated closely with cross-functional design and product teams to refine UI/UX flows, improving user retention and performance."
      ]
    },
    {
      role: "Android Engineer (Remote)",
      company: "The Penguin Technologies - TPT",
      companylogo: require("./assets/images/tptLogo.png"),
      companyUrl: "https://thepenguin.tech/",
      date: "June 2023 – Present",
      desc: "Contributed to developing new utility apps and enhancing existing features for better performance and usability.",
      descBullets: [
        "Built and published highly interactive utility applications on the Play Store, optimizing graphics rendering and memory usage.",
        "Collaborated with product owners and developers to research, design, and release critical application updates under tight deadlines.",
        "Integrated external libraries, analytics SDKs, and local data persistence mechanisms to improve app stability and user engagement."
      ]
    },
    {
      role: "Android Engineer (Onsite)",
      company: "Cyber ICT Technologies (Pvt.) Limited",
      companylogo: require("./assets/images/viewonlyLogo.png"),
      companyUrl: "https://cyberictech.com",
      date: "October 2021 – May 2023",
      desc: "Developed and maintained Android application suites, ensuring they were optimized for performance and scalability.",
      descBullets: [
        "Implemented modular features and integrated push notifications, location services, and databases for complex business apps.",
        "Analyzed application performance bottlenecks and optimized layout hierarchies, resulting in faster load times and smoother animations.",
        "Maintained robust codebase stability by executing comprehensive unit testing, debugging, and continuous integration workflows."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set false to display standard Contact profile instead of Github profile call, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Apps & Projects",
  subtitle:
    "PRODUCTION-READY MOBILE APPLICATIONS PUBLISHED ON GOOGLE PLAY STORE",
  projects: [
    {
      name: "Quran- Mushaf Makkah مصحـف مكة",
      packageName: "com.quran.mushaf.mecca",
      developer: "Seyed Yousuf Jalili",
      description:
        "Comprehensive Quran App: 100 reciters, 35 interpretations & 50 translations",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.quran.mushaf.mecca",
      iconUrl: "/apps/com-quran-mushaf-mecca.webp",
      category: "EDUCATION",
      websiteUrl: "https://mushafmakkah.com/",
      technologies: [
        "Kotlin",
        "Android SDK",
        "Offline Support",
        "Audio Recitations"
      ]
    },
    {
      name: "Telawa Hafs Quran مصحف التلاوة",
      packageName: "com.smartech.quran.mushaf.telawa.hafs",
      developer: "Quran Audio Library",
      description:
        "Reading Quran & listening to its recitations: Telawah app with advanced features",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.smartech.quran.mushaf.telawa.hafs",
      iconUrl: "/apps/com-smartech-quran-mushaf-telawa-hafs.webp",
      category: "EDUCATION",
      technologies: ["Kotlin", "Android SDK", "Jetpack Compose", "ExoPlayer"]
    },
    {
      name: "kids Quran مصحف الأطفال القرآن",
      packageName: "online.smartech.kids.quran",
      developer: "مجموعة قاف للدراسات الترجمة التقنية النشرQaf Group",
      description:
        "Interactive kids app 4 learning the alphabet (Qaida) & memorizing the holy Quran",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=online.smartech.kids.quran",
      iconUrl: "/apps/online-smartech-kids-quran.webp",
      category: "EDUCATION",
      technologies: [
        "Kotlin",
        "Android SDK",
        "Jetpack Compose",
        "Interactive Audio"
      ]
    },
    {
      name: "محفظ الوحيين El-Mohafez",
      packageName: "net.hammady.android.mohafez",
      developer: "International waqf and relief foundation (IWARF)",
      description:
        "Easily memorize the Holy Quran, the Sunnah (Hadith), and other religious texts.",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=net.hammady.android.mohafez",
      iconUrl: "/apps/net-hammady-android-mohafez.webp",
      category: "EDUCATION",
      technologies: [
        "Kotlin",
        "Android SDK",
        "Jetpack Compose",
        "Memorization Tracker"
      ]
    },
    {
      name: "Time Warp Scan : Face Scanner",
      packageName: "com.app.resort.time.warp.scan.face.scanner.offline",
      developer: "Apps Resort - Daily Tool Apps",
      description:
        "Create hilarious face warps and mind-bending videos with Ease",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.app.resort.time.warp.scan.face.scanner.offline",
      iconUrl: "/apps/com-app-resort-time-warp-scan-face-scanner-offline.webp",
      category: "ENTERTAINMENT",
      technologies: [
        "Kotlin",
        "CameraX",
        "Image Processing",
        "Video Distortion Filters"
      ]
    },
    {
      name: "Wifi passwords Scan: Analyzer",
      packageName: "com.appresort.wifi.analyzer.wifi.scanner.speed.test",
      developer: "Apps Resort - Daily Tool Apps",
      description:
        "Analyze WiFi, test speed & check signal and network details",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.appresort.wifi.analyzer.wifi.scanner.speed.test",
      iconUrl: "/apps/com-appresort-wifi-analyzer-wifi-scanner-speed-test.webp",
      category: "TOOLS",
      technologies: [
        "Kotlin",
        "WifiManager",
        "Network Speed Test API",
        "Diagnostics"
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Android Developer Specialist",
      subtitle:
        "Specialized in Kotlin, Jetpack Compose, and modern Android development architecture patterns.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Android Logo",
      footerLink: []
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@shahid.iqbal4213",
      title: "My Medium Blogs",
      description:
        "Check out my articles and write-ups on Medium sharing my experience and learnings in Android development."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Modern Android Development",
      subtitle:
        "Sharing learnings about Jetpack Compose and Kotlin Multiplatform",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "shahid.iqbal4213@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "shahidzbi", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
