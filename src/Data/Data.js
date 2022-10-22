// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilBooks,
    UilPackage,
    UilChart,
    UilSignOutAlt,
} from "@iconscout/react-unicons";
// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Registration",
  },
  {
    icon: UilBooks,
    heading: "Courses",
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Artificial Inteligence",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    series: [
      {
        name: "Artificial Inteligence",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Research Methodology",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    series: [
      {
        name: "Research Methodology",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Procurement",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    series: [
      {
        name: "Procurement",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Description Card Data
export const DescriptionData = [
  {
    courseName: "Artificial Inteligence\n",
    desc: "Artificial intelligence refers to systems or machines that mimic human intelligence to perform tasks and can iteratively improve themselves based on the information they collect.",
  },
  {
    courseName: "Research Methodology\n",
    desc: "Research methodology is the specific procedures or techniques used to identify, select, process, and analyze information about a topic.",
  },
  {
    courseName: "Procurement\n",
    desc: "Procurement is a strategic process that involves the acquisition of goods and services. Unlike purchasing, it involves a series of steps that are usually taken by businesses to meet certain needs, such as production, inventory, and sales.",
  },
];