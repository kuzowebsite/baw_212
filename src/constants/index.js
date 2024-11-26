import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["НҮҮР", "БИДНЫ ТУХАЙ", "ЗЭЭЛ", "ХОЛБОО БАРИХ"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Загвар 1",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Загвар 2"],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "Загвар 3",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["Загвар 4"],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "Саарал",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "Цэнхэр",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "Цагаан",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "Хар",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: 'Заг/ 1"', value: "small" },
  { label: 'Заг/ 2"', value: "large" },
];

export const footerLinks = [
  "Facebook",
  "YouTube",
  "Instagram",
  "Twitter",
];