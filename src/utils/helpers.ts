import { Note } from "../redux/notesSlice";
import { Categories } from "./config";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getDate = () => {
  const dateObj = new Date(),
    month = MONTHS[dateObj.getMonth()],
    day = dateObj.getDate(),
    year = dateObj.getFullYear();

  return `${month} ${day}, ${year}`;
};

export type SummaryData = {
  [key: string]: {
    active: number;
    archived: number;
    selector: string;
    icon: string;
    name: string;
  };
};

export const calculateSummary = (categories: Categories, notes: Note[]) => {
  let summary: SummaryData = {};

  for (const key in categories) {
    const category = categories[key];

    summary[category.selector] = {
      active: 0,
      archived: 0,
      selector: category.selector,
      icon: category.icon,
      name: category.name,
    };
  }

  notes.forEach((note) => {
    if (note.archived) {
      summary[note.category.selector].archived += 1;
    } else {
      summary[note.category.selector].active += 1;
    }
  });

  return summary;
};
