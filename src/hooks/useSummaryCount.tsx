import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// Helpers
import { calculateSummary } from "../utils/helpers";
// Types
import { Note } from "../redux/reducer";
import { RootState } from "../redux/store";
import { CATEGORIES } from "../utils/config";

export const useSummaryCount = () => {
  const notes: Array<Note> = useSelector((state: RootState) => state.notes);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    setSummary(calculateSummary(CATEGORIES, notes));
  }, [notes]);
  return summary;
};
