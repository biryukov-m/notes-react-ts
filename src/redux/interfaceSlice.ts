import { Reducer } from "react";

const initialState = {
  showPopup: false,
  updateNoteId: null,
  filter: "Active",
};

export const interfaceReducer: Reducer<any, any> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "interface/togglePopupClicked": {
      return Object.assign({}, state, {
        showPopup: !state.showPopup,
        updateNoteId: null,
      });
    }
    case "interface/editNoteClicked": {
      return Object.assign({}, state, {
        showPopup: true,
        updateNoteId: action.payload,
      });
    }
    case "interface/filterChanged": {
      return Object.assign({}, state, { filter: action.payload });
    }

    default: {
      return state;
    }
  }
};
