import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import spacemoonImg from "@/public/spacemoon.png";
import bankAppImg from "@/public/bankapp.jpg";
import marbleraceImg from "@/public/marblerace.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "UI/UX Designer",
    location: "Texas, Austin (Remote)",
    description:
      "At Quantus INC, my career as a UI/UX designer allowed me to witness first-hand tranformative power of design.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    description:
      "Money Soultion Bank App is an app designed to create a user-friendly and appealing interface.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  
] as const;

export const projectsData = [
  {
    title: "Quantas",
    description:
      "This platform streamlines EHR management, with user-friendly interfaces and advanced features for healthcare delivery.",
    tags: ["Figma", "Heuristic", "UX", "User Expreience", "UI", "User Interface"],
    imageUrl: spacemoonImg,
  },
  {
    title: "Bank App",
    description:
      "This banking app is designed to elevate the overall efficiency of financial management. ",
    tags: ["App design", "UI", "user Interface", "UX", "User Experience", "Figma"],
    imageUrl: bankAppImg,
  },
] as const;

export const skillsData = [
  "UI",
  "UX",
  "User Interface",
  "User Experience",
  "Web Design",
  "App Design",
  "Graphic Design",
  "Figma",
  "Wireframes",
  "Mood board",
  "Heuristic",

] as const;
