"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types for Technology Showcase
interface TechItem {
  name: string;
  url: string;
  color: string;
  glowColor: string;
  svg: React.ReactNode;
}

// Types for Content Cards
interface CardItem {
  title: string;
  description: string;
  number: string;
  gradient: string;
  icon: React.ReactNode;
}

export default function WhatIDo() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Senior Highlights List
  const highlights = [
    "Senior Android Engineer",
    "Kotlin Expert",
    "Kotlin Multiplatform Specialist",
    "Jetpack Compose Expert",
    "Firebase Integration",
    "Material Design 3",
    "Clean Architecture",
    "MVVM",
    "MVI",
    "Coroutines & Flow",
    "Hilt DI",
    "CI/CD",
    "Performance Optimization",
    "Google Play Deployment"
  ];

  // 18 Technologies with official SVG paths, URLs and colors
  const technologies: TechItem[] = [
    {
      name: "Android",
      url: "https://developer.android.com",
      color: "text-[#3DDB85]",
      glowColor: "shadow-[#3DDB85]/20 border-[#3DDB85]/30",
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z" />
        </svg>
      )
    },
    {
      name: "Kotlin",
      url: "https://kotlinlang.org",
      color: "text-[#7F52FF]",
      glowColor: "shadow-[#7F52FF]/20 border-[#7F52FF]/30",
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M24 24H0V0h24L12 12Z" />
        </svg>
      )
    },
    {
      name: "Kotlin Multiplatform",
      url: "https://kotlinlang.org/lp/multiplatform",
      color: "text-[#37BCFD]",
      glowColor: "shadow-[#7F52FF]/20 border-[#37BCFD]/30",
      svg: (
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" aria-hidden="true">
          <path d="M0 22.5629V0.0835311L22.4794 22.5629H0ZM0 25.4372V48H0.0572568L22.6201 25.4372H0ZM25.9906 22.0094L48 0H3.98128L25.9906 22.0094ZM26.0193 26.1028L4.1221 48H47.9164L26.0193 26.1028Z" fill="url(#kmpGradient)" />
          <defs>
            <radialGradient id="kmpGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(43.5 4.5) rotate(135) scale(61.5183)">
              <stop stopColor="#37BCFD" />
              <stop offset="0.580197" stopColor="#7F52FF" />
              <stop offset="1" stopColor="#C711E1" />
            </radialGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "Compose Multiplatform",
      url: "https://www.jetbrains.com/lp/compose-multiplatform",
      color: "text-[#6075F2]",
      glowColor: "shadow-[#6B57FF]/20 border-[#6075F2]/30",
      svg: (
        <svg viewBox="0 0 50 56" fill="none" className="w-full h-full" aria-hidden="true">
          <path d="M49 14V42L25 56L1 42V14L25 0L49 14Z" fill="#6075F2" />
          <path d="M34.5 22.5V33.5L25 39V56L49 42V13.9998L34.5 22.5Z" fill="#6B57FF" />
          <path d="M25 39L15.5 33.5V22.5L1 14V42L25 56V39Z" fill="url(#cmpRadial)" />
          <path d="M15.5 22.5L25 17L34.5 22.5L49 14L25 0L1 14L15.5 22.5Z" fill="url(#cmpLinear)" />
          <path d="M25 17L34.5 22.5V33.5L25 39L15.5001 33.5L15.5 22.5L25 17Z" fill="#0E131F" />
          <defs>
            <radialGradient id="cmpRadial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.1306 14.4412) scale(42.1315 42.1318)">
              <stop stopColor="#5383EC" />
              <stop offset="0.86699" stopColor="#7F52FF" />
            </radialGradient>
            <linearGradient id="cmpLinear" x1="37.1719" y1="0.37664" x2="10.9733" y2="30.0353" gradientUnits="userSpaceOnUse">
              <stop stopColor="#33C3FF" />
              <stop offset="0.87843" stopColor="#5383EC" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "Jetpack Compose",
      url: "https://developer.android.com/jetpack/compose",
      color: "text-[#4285F4]",
      glowColor: "shadow-[#4285F4]/20 border-[#3DDB85]/30",
      svg: (
        <svg viewBox="0 0 128 128" fill="none" className="w-full h-full" aria-hidden="true">
          <path d="M41.226 76.778a4.002 4.002 0 0 1-.47-1.29c.09.452.25.887.47 1.29zm.578.713c.222.22.472.411.749.548l18.88 10.565-18.88-10.565a2.899 2.899 0 0 1-.747-.548z" fill="#083042" />
          <path d="M64.342 101.967h-.14a8.301 8.301 0 0 1-4.014-1.016l-28.182-15.75c-1.663-.932-2.686-2.66-2.686-4.527V48.628c0-1.373.249-2.69.83-3.842L8.114 32.522c-.913 1.92-1.383 4.088-1.356 6.366v52.927a8.675 8.675 0 0 0 4.458 7.49l46.481 26.012c2.05 1.152 4.347 1.701 6.617 1.701v-.027c.055-3.32.028-16.628.028-25.023z" fill="#083042" />
          <path d="m86.46 50.6-.167-.246c-.138-.192-.275-.357-.413-.548.138.164.275.356.413.547a.973.973 0 0 1 .167.247zM63.262 37.76c.14 0 .251-.027.39-.027-.139.027-.278.027-.39.027z" fill="#3DDB85" />
          <path d="M30.122 44.757a7.214 7.214 0 0 1 2.825-3.072l26.52-15.503a8.065 8.065 0 0 1 8.03-.082l26.798 15.009a8.993 8.993 0 0 1 3.018 2.743L118.99 31.04a14.913 14.913 0 0 0-4.955-4.5L69.766 1.764a13.32 13.32 0 0 0-13.233.137L12.765 27.472a11.704 11.704 0 0 0-4.651 5.049l22.009 12.236z" fill="#3DDB85" />
          <path d="M62.157 37.983c.057-.028.114-.028.17-.056-.056.028-.113.028-.17.056zm-20.88 12.949c.056-.11.111-.22.168-.3-.057.109-.111.19-.168.3l-.082.246z" fill="#3DDB85" />
          <path d="M118.962 31.04 97.285 43.852c.83 1.207 1.329 2.633 1.355 4.089v30.51a7.881 7.881 0 0 1-3.93 6.914L68.188 100.87a8.07 8.07 0 0 1-3.849 1.097c.029 8.369.029 21.677-.027 24.997v.027a13.533 13.533 0 0 0 6.617-1.812l43.769-25.599c4.07-2.387 6.562-6.723 6.506-11.415V37.817c-.028-2.442-.858-4.774-2.242-6.777z" fill="#4285F4" />
          <path d="M86.963 75.187c-.028.056-.028.111-.056.168a.387.387 0 0 0 .056-.168zm-.278-24.227c-.057-.138-.14-.248-.223-.385.083.137.166.275.222.385zM66.807 88.576 84.58 78.178c.111-.054.195-.138.306-.192-.111.054-.195.138-.306.192l-17.773 10.4zM86.74 75.818c-.056.138-.139.275-.196.413.057-.165.112-.303.196-.413z" fill="#4285F4" />
          <path d="M41.198 51.178a5.508 5.508 0 0 0-.415 1.675c-.028.218-.028.438-.028.686v21.483c0 .164 0 .302.028.467.056.465.222.905.47 1.29.167.274.36.492.555.712.222.22.47.411.746.55l18.882 10.563a5.49 5.49 0 0 0 2.684.685h.195a5.155 5.155 0 0 0 2.492-.74L84.58 78.15c.111-.055.194-.138.305-.192.194-.137.388-.275.554-.44.26-.236.501-.492.719-.768.138-.192.277-.383.388-.576.082-.136.139-.274.193-.412.056-.135.14-.301.195-.465.027-.056.027-.111.055-.165a5.403 5.403 0 0 0 .249-1.647V53.044c0-.383-.056-.74-.138-1.096-.055-.248-.14-.468-.222-.688l-.166-.328c-.055-.138-.14-.247-.222-.385l-.166-.246c-.138-.193-.277-.357-.415-.549a5.607 5.607 0 0 0-1.606-1.29L66.337 38.394a6.145 6.145 0 0 0-.97-.44 5.86 5.86 0 0 0-1.385-.246h-.36c-.137 0-.248 0-.386.026a5.658 5.658 0 0 0-.942.165c-.055.027-.11.027-.166.056-.415.11-.803.301-1.191.52l-17.773 10.4a4.548 4.548 0 0 0-1.33 1.18c-.137.192-.276.384-.387.576-.055.11-.11.192-.166.302l-.083.246Z" fill="#D6F0FF" />
          <path d="M64.312 89.288h-.194a5.512 5.512 0 0 1-2.686-.684L42.552 78.04a3.737 3.737 0 0 1-.748-.549 3.31 3.31 0 0 1-.554-.714 3.998 3.998 0 0 1-.47-1.29c-.029-.163-.029-.301-.029-.465V53.537c0-.219 0-.465.029-.686.053-.575.192-1.14.415-1.674L36.1 48.078l-5.98-3.32c-.554 1.152-.83 2.468-.83 3.841v32.047a5.322 5.322 0 0 0 2.685 4.528l28.157 15.776a8.023 8.023 0 0 0 4.014 1.016h.14c0-4.089-.029-6.997-.029-6.997l.055-5.68z" fill="#083042" />
          <path d="m94.266 41.109-26.799-15.01a8.066 8.066 0 0 0-8.029.083l-26.52 15.504a7.049 7.049 0 0 0-2.826 3.073l6.01 3.32 5.093 3.099.082-.246c.056-.111.111-.22.166-.302.111-.192.25-.384.388-.576.36-.467.803-.85 1.33-1.18l17.772-10.4c.38-.213.777-.387 1.191-.52.056-.027.111-.027.166-.056.308-.084.623-.138.941-.164.138 0 .249-.028.388-.028h.36c.469.03.933.111 1.384.246.34.108.665.255.969.441l17.966 10.07a5.99 5.99 0 0 1 1.608 1.289c.137.164.277.357.414.548l.167.246 4.595-3.044 6.229-3.704c-.803-1.071-1.827-2.032-3.045-2.69z" fill="#3DDB85" />
          <path d="M86.46 50.602c.083.136.139.246.221.384l.167.329a4.783 4.783 0 0 1 .36 1.783V73.54a5.414 5.414 0 0 1-.25 1.646c-.027.054-.027.11-.055.164a3.423 3.423 0 0 1-.193.468c-.057.135-.14.273-.195.41-.11.193-.249.384-.388.577a6.243 6.243 0 0 1-.719.767c-.166.165-.36.302-.554.44-.111.054-.193.137-.304.192L66.776 88.602a5.841 5.841 0 0 1-2.492.742v5.679s0 2.909.028 6.997a7.785 7.785 0 0 0 3.849-1.097l26.52-15.504c2.465-1.453 3.96-4.088 3.932-6.913V47.995c-.027-1.482-.525-2.882-1.355-4.089l-6.231 3.705z" fill="#4285F4" />
        </svg>
      )
    },
    {
      name: "Material Design 3",
      url: "https://m3.material.io",
      color: "text-[#2196F3]",
      glowColor: "shadow-[#2196F3]/20 border-[#2196F3]/30",
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M11.9998 23.9997c-1.6545 0-3.218-.309-4.691-.927-1.4544-.6364-2.7269-1.4909-3.8179-2.5639-1.073-1.0905-1.9274-2.3634-2.5634-3.8179C.3085 15.2179 0 13.6545 0 12c0-1.6725.309-3.2364.927-4.6909.6365-1.4545 1.491-2.718 2.564-3.791C4.5818 2.4278 5.8543 1.5733 7.3087.9548c1.473-.6365 3.0365-.9545 4.691-.9545 1.673 0 3.2364.318 4.6909.955 1.4544.618 2.7179 1.4725 3.7909 2.563 1.091 1.073 1.945 2.3364 2.5634 3.7909C23.6815 8.7641 24 10.3275 24 12c0 1.655-.3185 3.218-.955 4.6909-.618 1.4545-1.4724 2.7274-2.5634 3.818-1.073 1.0729-2.3365 1.9274-3.791 2.5639-1.455.618-3.0179.927-4.6909.927zm-7.6364-5.8633V5.8636A9.4843 9.4843 0 0 0 2.755 8.7001C2.373 9.7365 2.1825 10.8365 2.1825 12s.1905 2.2725.5724 3.3274a9.5713 9.5713 0 0 0 1.609 2.809zm1.5-13.7727H18.163a9.4848 9.4848 0 0 0-2.836-1.609c-1.0549-.382-2.1639-.5725-3.3273-.5725-1.1635 0-2.2725.1905-3.327.5725a9.5713 9.5713 0 0 0-2.8094 1.609Zm6.1364 10.3637 4.1179-8.1818H7.9088Zm1.091 2.727h4.3633V8.7276Zm-6.5454 0h4.3634L6.5454 8.7276Zm8.7813 3.791c1.0545-.382 2-.918 2.836-1.609H5.8628a9.5713 9.5713 0 0 0 2.8094 1.609c1.0545.3819 2.1635.5724 3.327.5724 1.0543 0 2.1823-.1579 3.3274-.5725zm4.3089-3.109a9.5713 9.5713 0 0 0 1.609-2.809c.382-1.055.5724-2.164.5724-3.3274 0-1.1635-.1905-2.2635-.5724-3.3-.382-1.055-.918-1.9999-1.609-2.8364Z" />
        </svg>
      )
    },
    {
      name: "Firebase",
      url: "https://firebase.google.com",
      color: "text-[#FFCA28]",
      glowColor: "shadow-[#FFCA28]/20 border-[#FFCA28]/30",
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z" />
        </svg>
      )
    },
    {
      name: "Hilt",
      url: "https://developer.android.com/training/dependency-injection/hilt-android",
      color: "text-[#007ACC]",
      glowColor: "shadow-[#007ACC]/20 border-[#007ACC]/30",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" aria-hidden="true">
          <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z" fill="url(#hiltGradient)" opacity="0.15" />
          <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z" stroke="url(#hiltGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 6v10M10 8h4M9 16h6" stroke="#3DDB85" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="hiltGradient" x1="3" y1="2" x2="21" y2="23" gradientUnits="userSpaceOnUse">
              <stop stopColor="#007ACC" />
              <stop offset="1" stopColor="#3DDB85" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "Room",
      url: "https://developer.android.com/training/data-storage/room",
      color: "text-[#3DDB85]",
      glowColor: "shadow-[#3DDB85]/20 border-[#3DDB85]/30",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" aria-hidden="true">
          <path d="M4 14c0 1.66 3.58 3 8 3s8-1.34 8-3M4 18c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="url(#roomGradient)" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="12" cy="10" rx="8" ry="3" stroke="url(#roomGradient)" strokeWidth="2" />
          <path d="M2 10l10-7 10 7" stroke="#3DDB85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="roomGradient" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3DDB85" />
              <stop offset="1" stopColor="#073042" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "SQLite",
      url: "https://sqlite.org",
      color: "text-[#003B57]",
      glowColor: "shadow-[#003B57]/20 border-[#003B57]/30",
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z" />
        </svg>
      )
    },
    {
      name: "Retrofit",
      url: "https://square.github.io/retrofit",
      color: "text-[#00B0FF]",
      glowColor: "shadow-[#00B0FF]/20 border-[#00B0FF]/30",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" aria-hidden="true">
          <path d="M17 17h-11m0 0l3-3m-3 3l3 3M7 7h11m0 0l-3-3m3 3l-3 3" stroke="url(#retrofitGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="8" y="8" width="8" height="8" rx="2" fill="#073042" stroke="url(#retrofitGradient)" strokeWidth="1.5" />
          <path d="M10 10v4h2a1 1 0 000-2h-2m2 0l1 2" stroke="#3DDB85" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="retrofitGradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3DDB85" />
              <stop offset="1" stopColor="#4285F4" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "Ktor",
      url: "https://ktor.io",
      color: "text-[#FF4081]",
      glowColor: "shadow-[#FF4081]/20 border-[#FF4081]/30",
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M8 0 0 8l8 8V8h8zm8 8v8H8l8 8 8-8z" />
        </svg>
      )
    },
    {
      name: "GraphQL",
      url: "https://graphql.org",
      color: "text-[#E10098]",
      glowColor: "shadow-[#E10098]/20 border-[#E10098]/30",
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z" />
        </svg>
      )
    },
    {
      name: "Google Play",
      url: "https://play.google.com/console",
      color: "text-[#4285F4]",
      glowColor: "shadow-[#4285F4]/20 border-[#4285F4]/30",
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
        </svg>
      )
    },
    {
      name: "Google Maps Platform",
      url: "https://developers.google.com/maps",
      color: "text-[#34A853]",
      glowColor: "shadow-[#34A853]/20 border-[#34A853]/30",
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z" />
        </svg>
      )
    },
    {
      name: "Google Cloud",
      url: "https://cloud.google.com",
      color: "text-[#4285F4]",
      glowColor: "shadow-[#4285F4]/20 border-[#4285F4]/30",
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z" />
        </svg>
      )
    },
    {
      name: "Git",
      url: "https://git-scm.com",
      color: "text-[#F05032]",
      glowColor: "shadow-[#F05032]/20 border-[#F05032]/30",
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z" />
        </svg>
      )
    },
    {
      name: "GitHub",
      url: "https://github.com",
      color: "text-slate-100",
      glowColor: "shadow-white/20 border-white/30",
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      )
    }
  ];

  // 4 Premium Feature Cards
  const cards: CardItem[] = [
    {
      title: "Android Engineering",
      description: "Build scalable, maintainable, and high-performance Android applications using Kotlin, Jetpack libraries, modern architecture patterns, and Google's recommended best practices.",
      number: "01",
      gradient: "from-emerald-500/20 to-teal-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emerald-400">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    },
    {
      title: "Kotlin Multiplatform Development",
      description: "Develop shared business logic across Android, iOS, Desktop, and Web platforms using Kotlin Multiplatform while preserving native platform experiences.",
      number: "02",
      gradient: "from-purple-500/20 to-indigo-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-400">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      )
    },
    {
      title: "Modern UI & Compose",
      description: "Create beautiful, responsive, and performant user interfaces using Jetpack Compose and Compose Multiplatform following Material Design 3 principles.",
      number: "03",
      gradient: "from-blue-500/20 to-cyan-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-400">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      title: "Backend & Cloud Integration",
      description: "Integrate Firebase services, REST APIs, GraphQL, authentication systems, cloud services, analytics, local databases, and push notification platforms.",
      number: "04",
      gradient: "from-amber-500/20 to-orange-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-400">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      )
    }
  ];

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section 
      id="skills" 
      className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      aria-label="What I Do Section"
    >
      {/* Background Gradients/Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-blue-400 mb-6 backdrop-blur-sm shadow-inner"
          >
            Specialization
          </motion.span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            What I Do
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-medium leading-relaxed">
            Senior Android &amp; Kotlin Multiplatform Engineer Building Scalable, High-Performance Mobile Experiences
          </p>
        </motion.div>

        {/* Senior-Level Highlights Badge Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto mb-20"
        >
          {highlights.map((highlight, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 shadow-md backdrop-blur-md cursor-default transition-colors"
            >
              {highlight}
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Content Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between h-full bg-slate-900/40 border border-slate-900 rounded-2xl p-6 backdrop-blur-lg overflow-hidden shadow-xl hover:shadow-2xl hover:border-slate-800 transition-all duration-300"
            >
              {/* Top Gradient Background */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${card.gradient} blur-3xl group-hover:scale-125 transition-transform duration-500 pointer-events-none`} />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-slate-700 transition-colors shadow-inner">
                    {card.icon}
                  </div>
                  <span className="text-4xl font-black text-slate-800 group-hover:text-slate-700/80 transition-colors">
                    {card.number}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 mt-6 rounded-full group-hover:via-blue-500/50 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Showcase Section */}
        <div className="border-t border-slate-900 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Core Tech Stack
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Explore the framework ecosystem powering robust multiplatform apps. Hover to inspect, click to read official specifications.
            </p>
          </motion.div>

          {/* Interactive Showcase Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-4 max-w-6xl mx-auto"
          >
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative"
              >
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit official documentation for ${tech.name}`}
                  className="flex flex-col items-center justify-center aspect-square rounded-2xl bg-slate-900/30 hover:bg-slate-900 border border-slate-900/80 hover:border-slate-800 p-4 transition-all duration-300 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950 group shadow-md"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  onFocus={() => setHoveredTech(tech.name)}
                  onBlur={() => setHoveredTech(null)}
                >
                  <div className={`w-10 h-10 transition-transform duration-300 group-hover:scale-110 filter group-hover:drop-shadow-lg ${tech.color}`}>
                    {tech.svg}
                  </div>
                </a>

                {/* Accessible Tooltip */}
                <AnimatePresence>
                  {hoveredTech === tech.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 -top-12 z-50 pointer-events-none"
                    >
                      <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-white whitespace-nowrap shadow-xl">
                        {tech.name}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 rotate-45 bg-slate-900 border-r border-b border-slate-800" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
