import React from "react";
import { withStore } from "../../../.storybook/decorators";
import Popup from "./Popup";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CATEGORIES } from "../../utils/config";

export default {
  component: Popup,
  title: "Add note form",
  decorators: [withStore],
} as ComponentMeta<typeof Popup>;

const defaultNote = {
  id: 0,
  date: "April 2, 2021",
  title: "Invention idea",
  text: "If i can find out how to do that thing",
  category: CATEGORIES.idea,
  dates: "",
  archived: false,
};

const mockedState = {
  notes: [defaultNote],
  interface: {
    showPopup: true,
    updateNoteId: 0,
    filter: "Active",
  },
};

const Template: ComponentStory<typeof Popup> = () => <Popup />;

export const AddingNote = Template.bind({});

export const UpdatingNote = Template.bind({});

UpdatingNote.parameters = {
  store: {
    initialState: {
      ...mockedState,
      interface: {
        updateNoteId: 0,
      },
    },
  },
};
