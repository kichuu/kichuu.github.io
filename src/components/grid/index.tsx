"use client"

import { useEffect, useState } from "react"
import cn from "classnames"
import styles from "./grid.module.scss"
import {
  WidthProvider,
  ResponsiveGridLayout as Responsive,
} from "react-grid-layout-next"
import { heights, layouts } from "@/data"
import ThemeToggle from "../theme-toggle"
import BlurFade from "../magic-ui/blur-fade"
import {
  TextMarqueeCard,
  MyTechCard,
  JobsCard,
  AboutCard,
  MapCard,
  ResumeCard,
  IconCard,
  DropifyCard,
  GameTech,
  FixYourAc,
  CardWrapper,
} from "@/components/cards"

export const layout = {
  all: {
    lg: [ // > 1216px
      {
        i: "bio",
        x: 0, y: 0, w: 5, h: 4,
        isResizable: false,
      },
      {
        i: "theme-toggle",
        x: 9, y: 1, w: 4, h: 3,
        isResizable: false,
      },
      {
        i: "map",
        x: 5, y: 1, w: 3, h: 3,
        isResizable: false,
      },
      {
        i: "text-marquee",
        x: 5, y: 0, w: 7, h: 1,
        isResizable: false,
      },
      {
        i: "linkedin",
        x: 0, y: 4, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "github",
        x: 0, y: 6, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "codepen",
        x: 0, y: 8, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "email",
        x: 2, y: 8, w: 4, h: 2,
        isResizable: false,
      },
      {
        i: "my-stack",
        x: 2, y: 4, w: 4, h: 4,
        isResizable: false,
      },
      {
        i: "jobs",
        x: 6, y: 4, w: 6, h: 7,
        isResizable: false,
      },
      {
        i: "game-tech",
        x: 0, y: 10, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "fix-your-ac",
        x: 6, y: 11, w: 6, h: 7,
        isResizable: false,
      },
      {
        i: "dropify",
        x: 0, y: 16, w: 6, h: 7,
        isResizable: false,
      },
      {
        i: "station-setup",
        x: 6, y: 18, w: 6, h: 7,
        isResizable: false,
      },
      {
        i: "alliance-landing",
        x: 0, y: 23, w: 6, h: 7,
        isResizable: false,
      },
      {
        i: "developer-landing",
        x: 6, y: 25, w: 6, h: 7,
        isResizable: false,
      },
    ],
    md: [ // 814px - 1215px
      {
        i: "bio",
        x: 0, y: 0, w: 5, h: 6,
        isResizable: false,
      },
      {
        i: "theme-toggle",
        x: 7, y: 1, w: 5, h: 5,
        isResizable: false,
      },
      {
        i: "map",
        x: 8, y: 6, w: 2, h: 6,
        isResizable: false,
      },
      {
        i: "text-marquee",
        x: 5, y: 0, w: 5, h: 1,
        isResizable: false,
      },
      {
        i: "linkedin",
        x: 4, y: 6, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "github",
        x: 6, y: 6, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "codepen",
        x: 4, y: 8, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "email",
        x: 6, y: 8, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "my-stack",
        x: 0, y: 6, w: 4, h: 6,
        isResizable: false,
      },
      {
        i: "jobs",
        x: 1, y: 12, w: 8, h: 10,
        isResizable: false,
      },
      {
        i: "game-tech",
        x: 0, y: 22, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "fix-your-ac",
        x: 6, y: 22, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "dropify",
        x: 0, y: 30, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "station-setup",
        x: 5, y: 30, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "alliance-landing",
        x: 0, y: 38, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "developer-landing",
        x: 5, y: 38, w: 5, h: 8,
        isResizable: false,
      },
    ],
    sm: [ // 0px - 813px
      {
        i: "bio",
        x: 0, y: 1, w: 4, h: 6,
        isResizable: false,
      },
      {
        i: "theme-toggle",
        x: 0, y: 7, w: 4, h: 5,
        isResizable: false,
      },
      {
        i: "map",
        x: 0, y: 12, w: 4, h: 4,
        isResizable: false,
      },
      {
        i: "text-marquee",
        x: 0, y: 0, w: 4, h: 1,
        isResizable: false,
      },
      {
        i: "linkedin",
        x: 0, y: 16, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "github",
        x: 2, y: 16, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "codepen",
        x: 0, y: 19, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "email",
        x: 2, y: 19, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "my-stack",
        x: 0, y: 22, w: 4, h: 6,
        isResizable: false,
      },
      {
        i: "jobs",
        x: 0, y: 28, w: 4, h: 16,
        isResizable: false,
      },
      {
        i: "game-tech",
        x: 0, y: 44, w: 6, h: 10,
        isResizable: false,
      },
      {
        i: "fix-your-ac",
        x: 0, y: 54, w: 6, h: 10,
        isResizable: false,
      },
      {
        i: "station-setup",
        x: 0, y: 64, w: 6, h: 10,
        isResizable: false,
      },
      {
        i: "dropify",
        x: 0, y: 74, w: 6, h: 10,
        isResizable: false,
      },
      {
        i: "alliance-landing",
        x: 0, y: 84, w: 6, h: 10,
        isResizable: false,
      },
      {
        i: "developer-landing",
        x: 0, y: 94, w: 6, h: 10,
        isResizable: false,
      },
    ],
  },
  
  work: {
    lg: [
      {
        i: "bio",
        x: 6, y: 21, w: 6, h: 4,
        isResizable: false,
      },
      {
        i: "theme-toggle",
        x: 8, y: 0, w: 6, h: 3,
        isResizable: false,
      },
      {
        i: "map",
        x: 9, y: 25, w: 3, h: 4,
        isResizable: false,
      },
      {
        i: "text-marquee",
        x: 0, y: 29, w: 12, h: 1,
        isResizable: false,
      },
      {
        i: "linkedin",
        x: 0, y: 25, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "github",
        x: 2, y: 25, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "codepen",
        x: 0, y: 27, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "email",
        x: 2, y: 25, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "my-stack",
        x: 4, y: 25, w: 5, h: 4,
        isResizable: false,
      },
      {
        i: "jobs",
        x: 0, y: 0, w: 6, h: 7,
        isResizable: false,
      },
      {
        i: "game-tech",
        x: 6, y: 3, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "fix-your-ac",
        x: 0, y: 7, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "dropify",
        x: 6, y: 9, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "station-setup",
        x: 0, y: 13, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "alliance-landing",
        x: 6, y: 15, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "developer-landing",
        x: 0, y: 19, w: 6, h: 6,
        isResizable: false,
      },
    ],
    md: [
      {
        i: "bio",
        x: 5, y: 29, w: 5, h: 6,
        isResizable: false,
      },
      {
        i: "theme-toggle",
        x: 5, y: 0, w: 5, h: 5,
        isResizable: false,
      },
      {
        i: "map",
        x: 8, y: 36, w: 2, h: 6,
        isResizable: false,
      },
      {
        i: "text-marquee",
        x: 5, y: 35, w: 5, h: 1,
        isResizable: false,
      },
      {
        i: "linkedin",
        x: 0, y: 36, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "github",
        x: 2, y: 36, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "codepen",
        x: 0, y: 39, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "email",
        x: 2, y: 39, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "my-stack",
        x: 4, y: 36, w: 4, h: 6,
        isResizable: false,
      },
      {
        i: "jobs",
        x: 0, y: 0, w: 5, h: 12,
        isResizable: false,
      },
      {
        i: "game-tech",
        x: 0, y: 12, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "fix-your-ac",
        x: 5, y: 5, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "dropify",
        x: 5, y: 13, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "station-setup",
        x: 0, y: 20, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "alliance-landing",
        x: 5, y: 21, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "developer-landing",
        x: 0, y: 28, w: 5, h: 8,
        isResizable: false,
      },
    ],
    sm: [
      {
        i: "bio",
        x: 0, y: 82, w: 4, h: 6,
        isResizable: false,
      },
      {
        i: "theme-toggle",
        x: 0, y: 0, w: 4, h: 5,
        isResizable: false,
      },
      {
        i: "map",
        x: 0, y: 100, w: 4, h: 6,
        isResizable: false,
      },
      {
        i: "text-marquee",
        x: 0, y: 81, w: 4, h: 1,
        isResizable: false,
      },
      {
        i: "linkedin",
        x: 0, y: 94, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "github",
        x: 2, y: 94, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "codepen",
        x: 0, y: 97, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "email",
        x: 2, y: 97, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "my-stack",
        x: 0, y: 88, w: 4, h: 6,
        isResizable: false,
      },
      {
        i: "jobs",
        x: 0, y: 5, w: 4, h: 16,
        isResizable: false,
      },
      {
        i: "game-tech",
        x: 0, y: 21, w: 4, h: 10,
        isResizable: false,
      },
      {
        i: "fix-your-ac",
        x: 0, y: 31, w: 4, h: 10,
        isResizable: false,
      },
      {
        i: "dropify",
        x: 0, y: 41, w: 4, h: 10,
        isResizable: false,
      },
      {
        i: "station-setup",
        x: 0, y: 51, w: 4, h: 10,
        isResizable: false,
      },
      {
        i: "alliance-landing",
        x: 5, y: 61, w: 4, h: 10,
        isResizable: false,
      },
      {
        i: "developer-landing",
        x: 0, y: 71, w: 4, h: 10,
        isResizable: false,
      },
    ],
  },
    about: {
    lg: [
      {
        i: "bio",
        x: 0, y: 0, w: 5, h: 4,
        isResizable: false,
      },
      {
        i: "theme-toggle",
        x: 7, y: 5, w: 5, h: 3,
        isResizable: false,
      },
      {
        i: "map",
        x: 9, y: 0, w: 3, h: 4,
        isResizable: false,
      },
      {
        i: "text-marquee",
        x: 7, y: 4, w: 5, h: 1,
        isResizable: false,
      },
      {
        i: "linkedin",
        x: 5, y: 0, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "github",
        x: 7, y: 0, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "codepen",
        x: 5, y: 2, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "email",
        x: 7, y: 2, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "my-stack",
        x: 0, y: 4, w: 7, h: 4,
        isResizable: false,
      },
      {
        i: "jobs",
        x: 6, y: 8, w: 6, h: 7,
        isResizable: false,
      },
      {
        i: "game-tech",
        x: 0, y: 8, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "fix-your-ac",
        x: 0, y: 14, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "station-setup",
        x: 6, y: 15, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "dropify",
        x: 0, y: 20, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "alliance-landing",
        x: 6, y: 21, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "developer-landing",
        x: 0, y: 26, w: 6, h: 6,
        isResizable: false,
      },
    ],
    md: [
      {
        i: "bio",
        x: 0, y: 0, w: 5, h: 6,
        isResizable: false,
      },
      {
        i: "theme-toggle",
        x: 6, y: 6, w: 4, h: 5,
        isResizable: false,
      },
      {
        i: "map",
        x: 9, y: 0, w: 3, h: 4,
        isResizable: false,
      },
      {
        i: "text-marquee",
        x: 6, y: 11, w: 4, h: 1,
        isResizable: false,
      },
      {
        i: "linkedin",
        x: 5, y: 0, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "github",
        x: 5, y: 2, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "codepen",
        x: 5, y: 4, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "email",
        x: 7, y: 0, w: 3, h: 2,
        isResizable: false,
      },
      {
        i: "my-stack",
        x: 0, y: 6, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "jobs",
        x: 1, y: 12, w: 8, h: 10,
        isResizable: false,
      },
      {
        i: "game-tech",
        x: 0, y: 22, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "fix-your-ac",
        x: 5, y: 22, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "station-setup",
        x: 0, y: 30, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "dropify",
        x: 5, y: 30, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "alliance-landing",
        x: 0, y: 38, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "developer-landing",
        x: 5, y: 38, w: 5, h: 8,
        isResizable: false,
      },
    ],
    sm: [
      {
        i: "bio",
        x: 0, y: 0, w: 4, h: 6,
        isResizable: false,
      },
      {
        i: "theme-toggle",
        x: 0, y: 23, w: 4, h: 5,
        isResizable: false,
      },
      {
        i: "map",
        x: 0, y: 6, w: 4, h: 4,
        isResizable: false,
      },
      {
        i: "text-marquee",
        x: 0, y: 22, w: 4, h: 1,
        isResizable: false,
      },
      {
        i: "linkedin",
        x: 0, y: 10, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "github",
        x: 2, y: 10, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "codepen",
        x: 0, y: 13, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "email",
        x: 2, y: 13, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "my-stack",
        x: 0, y: 16, w: 4, h: 6,
        isResizable: false,
      },
      {
        i: "jobs",
        x: 0, y: 28, w: 6, h: 16,
        isResizable: false,
      },
      {
        i: "game-tech",
        x: 0, y: 44, w: 6, h: 10,
        isResizable: false,
      },
      {
        i: "fix-your-ac",
        x: 0, y: 54, w: 6, h: 10,
        isResizable: false,
      },
      {
        i: "station-setup",
        x: 0, y: 64, w: 6, h: 10,
        isResizable: false,
      },
      {
        i: "dropify",
        x: 0, y: 74, w: 6, h: 10,
        isResizable: false,
      },
      {
        i: "alliance-landing",
        x: 0, y: 84, w: 6, h: 10,
        isResizable: false,
      },
      {
        i: "developer-landing",
        x: 0, y: 94, w: 6, h: 10,
        isResizable: false,
      },
    ],
  },
 
  
  skills: {
    lg: [
      {
        i: "my-stack",
        x: 0, y: 0, w: 7, h: 4,
        isResizable: false,
      },
      {
        i: "bio",
        x: 0, y: 4, w: 5, h: 4,
        isResizable: false,
      },
      {
        i: "theme-toggle",
        x: 7, y: 0, w: 5, h: 3,
        isResizable: false,
      },
      {
        i: "text-marquee",
        x: 7, y: 3, w: 5, h: 1,
        isResizable: false,
      },
      {
        i: "linkedin",
        x: 5, y: 4, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "github",
        x: 7, y: 4, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "phone",
        x: 7, y: 6, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "map",
        x: 9, y: 7, w: 3, h: 4,
        isResizable: false,
      },
      // Remaining items remain the same
    
    
      {
        i: "codepen",
        x: 0, y: 27, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "email",
        x: 2, y: 25, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "my-stack",
        x: 4, y: 25, w: 5, h: 4,
        isResizable: false,
      },
      {
        i: "jobs",
        x: 0, y: 0, w: 6, h: 7,
        isResizable: false,
      },
      {
        i: "game-tech",
        x: 6, y: 3, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "fix-your-ac",
        x: 0, y: 7, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "dropify",
        x: 6, y: 9, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "station-setup",
        x: 0, y: 13, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "alliance-landing",
        x: 6, y: 15, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "developer-landing",
        x: 0, y: 19, w: 6, h: 6,
        isResizable: false,
      },
    ],
    md: [
      {
        i: "my-stack",
        x: 0, y: 0, w: 6, h: 6,
        isResizable: false,
      },
      {
        i: "bio",
        x: 0, y: 6, w: 5, h: 6,
        isResizable: false,
      },
      {
        i: "theme-toggle",
        x: 6, y: 0, w: 4, h: 5,
        isResizable: false,
      },
      {
        i: "text-marquee",
        x: 6, y: 5, w: 4, h: 1,
        isResizable: false,
      },
      {
        i: "linkedin",
        x: 5, y: 0, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "github",
        x: 5, y: 2, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "phone",
        x: 7, y: 2, w: 2, h: 2,
        isResizable: false,
      },
      {
        i: "map",
        x: 8, y: 6, w: 2, h: 6,
        isResizable: false,
      },
      {
        i: "codepen",
        x: 0, y: 39, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "email",
        x: 2, y: 39, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "my-stack",
        x: 4, y: 36, w: 4, h: 6,
        isResizable: false,
      },
      {
        i: "jobs",
        x: 0, y: 0, w: 5, h: 12,
        isResizable: false,
      },
      {
        i: "game-tech",
        x: 0, y: 12, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "fix-your-ac",
        x: 5, y: 5, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "dropify",
        x: 5, y: 13, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "station-setup",
        x: 0, y: 20, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "alliance-landing",
        x: 5, y: 21, w: 5, h: 8,
        isResizable: false,
      },
      {
        i: "developer-landing",
        x: 0, y: 28, w: 5, h: 8,
        isResizable: false,
      },
    ],
    sm: [
      {
        i: "my-stack",
        x: 0, y: 0, w: 4, h: 6,
        isResizable: false,
      },
      {
        i: "bio",
        x: 0, y: 6, w: 4, h: 6,
        isResizable: false,
      },
      {
        i: "theme-toggle",
        x: 0, y: 12, w: 4, h: 5,
        isResizable: false,
      },
      {
        i: "text-marquee",
        x: 0, y: 17, w: 4, h: 1,
        isResizable: false,
      },
      {
        i: "linkedin",
        x: 0, y: 18, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "github",
        x: 2, y: 18, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "phone",
        x: 0, y: 21, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "map",
        x: 0, y: 24, w: 4, h: 6,
        isResizable: false,
      },
      {
        i: "codepen",
        x: 0, y: 97, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "email",
        x: 2, y: 97, w: 2, h: 3,
        isResizable: false,
      },
      {
        i: "my-stack",
        x: 0, y: 88, w: 4, h: 6,
        isResizable: false,
      },
      {
        i: "jobs",
        x: 0, y: 5, w: 4, h: 16,
        isResizable: false,
      },
      {
        i: "game-tech",
        x: 0, y: 21, w: 4, h: 10,
        isResizable: false,
      },
      {
        i: "fix-your-ac",
        x: 0, y: 31, w: 4, h: 10,
        isResizable: false,
      },
      {
        i: "dropify",
        x: 0, y: 41, w: 4, h: 10,
        isResizable: false,
      },
      {
        i: "station-setup",
        x: 0, y: 51, w: 4, h: 10,
        isResizable: false,
      },
      {
        i: "alliance-landing",
        x: 5, y: 61, w: 4, h: 10,
        isResizable: false,
      },
      {
        i: "developer-landing",
        x: 0, y: 71, w: 4, h: 10,
        isResizable: false,
      },
    ],
  },
    
  };
  
const ResponsiveGridLayout = WidthProvider(Responsive)

const Grid = () => {
  const [height, setHeight] = useState(280)
  const [isMounted, setMounted] = useState(false)
  const [isDraggable, setIsDraggable] = useState(true)
  const [activeLayout, setActiveLayout] = useState<keyof typeof layout>("all")

  useEffect(() => {
    setTimeout(() => {
      setMounted(true)
    }, 500)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsDraggable(false) // Disable dragging on mobile and tablet
      } else {
        setIsDraggable(true) // Enable dragging on desktop
      }
    }
    const navItems = [
      { id: "all", label: "All" },
      { id: "about", label: "About" },
      { id: "work", label: "Work" },
    ]
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <div className={`${styles.navbar}    `}>
        <CardWrapper className="  rounded-full" >
          <nav
            className="flex navbar justify-center gap-6 px-6     py-5 sm:px-8 sm:py-6"
            style={{ width: "360px", margin: "0 auto" , borderRadius: "50px" }}
          >
            <button
              className={`px-4 py-2 text-sm sm:text-base font-medium border border-gray-300 dark:border-gray-700 rounded-full transition-all duration-300 ease-in-out relative overflow-hidden group ${
                activeLayout === "all"
                  ? "dark:gray-900 text-grey-600"
                  : "bg-gray-200 dark:bg-zinc-800 dark:text-white text-gray-900"
              }`}
              onClick={() => setActiveLayout("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 text-sm sm:text-base font-medium border border-gray-300 dark:border-gray-700 rounded-full transition-all duration-300 ease-in-out relative overflow-hidden group${
                activeLayout === "about"
                ? "dark:gray-900 text-grey-600"
                  : "bg-gray-200 dark:bg-zinc-800 dark:text-white text-gray-900"
              }`}
              onClick={() => setActiveLayout("skills")}
            >
              About
            </button>
            <button
              className={`px-4 py-2 text-sm sm:text-base font-medium border border-gray-300 dark:border-gray-700 rounded-full transition-all duration-300 ease-in-out relative overflow-hidden group${
                activeLayout === "work"
                ? "dark:gray-900 text-grey-600"
                  : "bg-gray-200 dark:bg-zinc-800 dark:text-white text-gray-900"
              }`}
              onClick={() => setActiveLayout("work")}
            >
              Work
            </button>
          </nav>
        </CardWrapper>
      </div>

      <div className={styles.container}>
        <ResponsiveGridLayout
          useCSSTransforms
          className={styles.layout}
          layouts={layouts[activeLayout]} // Dynamically set layouts
          breakpoints={{
            lg: 1199,
            md: 799,
            sm: 374,
          }}
          cols={{
            lg: 12,
            md: 10,
            sm: 4,
          }}
          isDraggable={isDraggable}
          rowHeight={height}
          onBreakpointChange={(breakpoint: any) => {
            setHeight(heights[breakpoint])
          }}
          margin={[16, 16]}
        >
          {/* Grid Items */}
          <div
            key="bio"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
              height: "100%",
            }}
          >
            <BlurFade delay={0.01}>
              <AboutCard />
            </BlurFade>
          </div>
          <div
            key="theme-toggle"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <div className="flex flex-col-reverse sm:flex-col gap-3 h-full">
              <BlurFade delay={0.1}>
                <ResumeCard />
              </BlurFade>
              <BlurFade delay={0.12}>
                <ThemeToggle />
              </BlurFade>
            </div>
          </div>
          <div
            key="map"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.08}>
              <MapCard />
            </BlurFade>
          </div>
          <div
            key="text-marquee"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.04}>
              <TextMarqueeCard />
            </BlurFade>
          </div>
          <div
            key="linkedin"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.24}>
              <IconCard
                title="Linkedin"
                link="https://www.linkedin.com/in/krishnadev-r-a681aa343/"
              />
            </BlurFade>
          </div>
          <div
            key="github"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.26}>
              <IconCard title="Github" link="https://github.com/kichuu" />
            </BlurFade>
          </div>
          <div
            key="codepen"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.28}>
              <IconCard title="Phone" link="tel:+916282922960" />
            </BlurFade>
          </div>
          <div
            key="email"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.3}>
              <IconCard title="Email" link="mailto:krishnadevr07@gmail.com" />
            </BlurFade>
          </div>
          <div
            key="my-stack"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.35}>
              <MyTechCard />
            </BlurFade>
          </div>
          <div
            key="jobs"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.4}>
              <JobsCard />
            </BlurFade>
          </div>
          <div
            key="game-tech"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.5}>
              <GameTech />
            </BlurFade>
          </div>
          <div
            key="fix-your-ac"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.55}>
              <FixYourAc />
            </BlurFade>
          </div>
          {/* <div
					key="station-setup"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "700ms" : "0ms"
					}}
        >
					<BlurFade delay={0.60}>
						<StationSetupCard />
					</BlurFade>
				</div> */}
          <div
            key="dropify"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.65}>
              <DropifyCard />
            </BlurFade>
          </div>
          {/* <div
					key="alliance-landing"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "700ms" : "0ms"
					}}
        >
					<BlurFade delay={0.70}>
						<AllianceLandingCard />
					</BlurFade>
				</div> */}
          {/* <div
					key="developer-landing"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "700ms" : "0ms"
					}}
        >
					<BlurFade delay={0.75}>
						<DeveloperLandingCard />
					</BlurFade>
				</div> */}
        </ResponsiveGridLayout>
      </div>
    </>
  )
}

export default Grid
