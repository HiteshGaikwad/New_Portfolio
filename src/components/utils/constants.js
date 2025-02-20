import HTML from "../../assets/Images/Skills/html-icon.svg";
import CSS from "../../assets/Images/Skills/css-icon.svg";
import Javascript from "../../assets/Images/Skills/javascript-icon.svg";
import ReactJS from "../../assets/Images/Skills/react-icon.svg";
import NextJS from "../../assets/Images/Skills/next-js-icon.svg";
import Tailwind from "../../assets/Images/Skills/tailwind-css-icon.svg";
import Java from "../../assets/Images/Skills/java-icon.svg";
import SpringBoot from "../../assets/Images/Skills/spring-icon.svg";
import GitHub from "../../assets/Images/Skills/github-icon.svg";

import YouTubeThumbnail from "../../assets/Images/Thumbnails/YouTubeTumbnail.jpg";
import FoodHubThumbnail from "../../assets/Images/Thumbnails/FoodHubThumbnail.jpg";
import EBazaarThumbnail from "../../assets/Images/Thumbnails/EBazaarThumbnail.jpg";
import BondsThumbnail from "../../assets/Images/Thumbnails/bonds-thumbnail.png";
import CFOThumbnail from "../../assets/Images/Thumbnails/cfo-thumbnail.png";

import foodhubLogo from "../../assets/Images/ProjectLogo/foodhub.webp";
import EbazaarLogo from "../../assets/Images/ProjectLogo/eBazaarLogo.png";
import YouTubeLogo from "../../assets/Images/ProjectLogo/YouTubeLogo.webp";
import motilalLogo from "../../assets/Images/ProjectLogo/motilal-logo.jpg";

export const skills = [
  {
    name: "",
    icon: "",
  },

  {
    name: "HTML",
    icon: HTML,
  },
  {
    name: "CSS",
    icon: CSS,
  },
  {
    name: "Javascript",
    icon: Javascript,
  },
  {
    name: "ReactJS",
    icon: ReactJS,
  },
  {
    name: "NextJS",
    icon: NextJS,
  },
  {
    name: "Tailwind",
    icon: Tailwind,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "SpringBoot",
    icon: SpringBoot,
  },
  {
    name: "GitHub",
    icon: GitHub,
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    // icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    // icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const education = [
  {
    title: "BE Mechanical",
    college_name: "Yadavrao tasgaonkar Institute of Engineering & Technology",
    date: "2015-2019",
    initials: "BE",
    percent: "6.75 CGPA",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    college_name: "SDSM College",
    date: "2013-2015",
    initials: "12th",
    percent: "61%",
  },
  {
    title: "Secondary School Certificate (SSC)",
    college_name: "Jawahar Navodaya Vidyalaya Palghar",
    date: "2013",
    initials: "10th",
    percent: "7.8 CGPA",
  },
];

export const projectDetails = [
  {
    title: "CFO",
    LiveLink: "",
    description:
      "CFO(Chief Financial Officer) is a MOFSL's internal reports management application.",
    img: CFOThumbnail,
    techStack: ["HTML", "CSS", "Javascript", "React", "bootstrap"],
    logo: motilalLogo,
  },
  {
    title: "Bonds",
    LiveLink: "",
    description:
      "This is a MOFSL's internal application to publish and unpublish bonds in the market.",
    img: BondsThumbnail,
    techStack: ["HTML", "CSS", "Javascript", "React", "bootstrap"],
    logo: motilalLogo,
  },

  {
    title: "YouTube Clone",
    LiveLink: "https://you-tube-hiteshgaikwad.vercel.app",
    // img: "https://drive.google.com/thumbnail?id=1CY9DmgmvnBK3YVoDiYC28Hdy7GZeizJE",
    img: YouTubeThumbnail,
    techStack: ["HTML", "CSS", "Javascript", "React", "Redux", "Tailwind"],
    description: "This is a YouTube clone where you can watch the videos.",
    logo: YouTubeLogo,
  },
  {
    title: "FoodHub",
    LiveLink: "https://food-hub-eight-liart.vercel.app",
    // img: "https://drive.google.com/thumbnail?id=1CXlVYc3nBbXPE1LGUP4lMv_tSzyqUjN6",
    img: FoodHubThumbnail,
    techStack: ["HTML", "CSS", "Javascript", "React", "Redux", "Tailwind"],
    description: "This is a food ordering application.",
    logo: foodhubLogo,
  },
  {
    title: "E-Bazaar",
    LiveLink: "https://hiteshgaikwad.github.io/Ecommerce-website",
    // img: "https://drive.google.com/thumbnail?id=1DGdvSnNRka7Xzbm3GldMcEQjvsEzdZBQ",
    img: EBazaarThumbnail,
    techStack: ["HTML", "CSS", "Javascript", "React", "Redux", "Tailwind"],
    description:
      "This is a E-Commerce website where you can explore various product to buy.",
    logo: EbazaarLogo,
  },
];
