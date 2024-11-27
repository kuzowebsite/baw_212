import {
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
} from "../utils";

export const navLists = ["НҮҮР", "БИДНЫ ТУХАЙ", "ЗЭЭЛ", "ХОЛБОО БАРИХ"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      " ",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: [" "],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      " ",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: [" "],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const footerLinks = [
  "Facebook",
  "YouTube",
  "Instagram",
  "Twitter",
];