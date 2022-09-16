import { INITIAL_NOTES, CATEGORIES } from "../utils/config";
// Types
import { Category } from "../utils/config";
import { Reducer } from "react";
import { ActionCreator, PayloadAction } from "@reduxjs/toolkit";

export interface Note {
  id: number;
  date: string;
  title: string;
  text: string;
  category: Category;
  dates: string;
  archived: boolean;
}

let preloadedState = INITIAL_NOTES;

// Actions
export type NoteCreated = {
  title: string;
  text: string;
  category: string;
  date: string;
};

export const noteCreated: ActionCreator<PayloadAction<NoteCreated>> = ({
  title,
  text,
  category,
  date,
}) => ({
  type: "notes/noteCreated",
  payload: { title, text, category, date },
});

export type NoteUpdated = {
  id: number;
  title: string;
  text: string;
  category: string;
};

export const noteUpdated: ActionCreator<PayloadAction<NoteUpdated>> = ({
  id,
  title,
  text,
  category,
}) => ({
  type: "notes/noteUpdated",
  payload: { id, title, text, category },
});

const nextNoteId = (notes: Array<Note>) => {
  const maxId = notes.reduce((maxId, note) => Math.max(note.id, maxId), -1);
  return maxId + 1;
};

export const parseDates = (text: string) => {
  const regEx =
    /((?<!\d)(0?[1-9]|1[0-2])[/.-](0?[1-9]|[12]\d|3[01])[/.-]([12]\d{3}|[12]\d))(?!\d)/g;
  const match = text.match(regEx);
  return match ? match.join(", ") : "";
};

export const notesReducer: Reducer<any, any> = (
  state = preloadedState,
  action
) => {
  switch (action.type) {
    case "notes/noteCreated": {
      const newNote: Note = {
        id: nextNoteId(state),
        date: action.payload.date,
        title: action.payload.title,
        text: action.payload.text,
        category:
          CATEGORIES[action.payload.category as keyof typeof CATEGORIES],
        dates: parseDates(action.payload.text),
        archived: false,
      };

      return [...state, newNote];
    }

    case "notes/noteUpdated": {
      const updatedFields = {
        title: action.payload.title,
        text: action.payload.text,
        category:
          CATEGORIES[action.payload.category as keyof typeof CATEGORIES],
        dates: parseDates(action.payload.text),
      };

      return [...state].map((note) => {
        if (note.id !== action.payload.id) {
          return note;
        } else {
          return { ...note, ...updatedFields };
        }
      });
    }

    case "notes/noteDeleted": {
      return [...state].filter((note) => note.id !== action.payload);
    }

    case "notes/noteToggled": {
      return [...state].map((note) => {
        if (note.id !== action.payload) {
          return note;
        }
        return { ...note, archived: !note.archived };
      });
    }

    default: {
      return state;
    }
  }
};
