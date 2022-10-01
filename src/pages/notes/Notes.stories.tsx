import Notes from "./Notes";
import Table from "../../components/Table";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withStore } from "../../../.storybook/decorators";
import { CATEGORIES } from "../../utils/config";

export default {
  component: Notes,
  title: "Notes List",
  decorators: [],
} as ComponentMeta<typeof Notes>;

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
    showPopup: false,
    updateNoteId: null,
    filter: "Active",
  },
};

const Template: ComponentStory<typeof Notes> = () => <Notes />;

export const Default = Template.bind({});

Default.decorators = [
  withStore,
  (story) => <Table sectionClass={"notes-list"}>{story()}</Table>,
];

export const showArchived = Template.bind({});

showArchived.decorators = [
  withStore,
  (story) => <Table sectionClass={"notes-list"}>{story()}</Table>,
];

showArchived.parameters = {
  store: {
    initialState: {
      ...mockedState,
      notes: [
        {
          ...defaultNote,
          title: "Archived note #1",
          text: "Text of archived note #1",
          archived: true,
        },
        {
          ...defaultNote,
          title: "Archived note #2",
          text: "Text of archived note #2",
          archived: true,
        },
      ],
      interface: { filter: "Archived" },
    },
  },
};

export const showActive = Template.bind({});

showActive.decorators = [
  withStore,
  (story) => <Table sectionClass={"notes-list"}>{story()}</Table>,
];
//
showActive.parameters = {
  store: {
    initialState: {
      ...mockedState,
      notes: [
        {
          ...defaultNote,
          title: "Active note #1",
          text: "Text of active note #1",
        },
        {
          ...defaultNote,
          id: 1,
          title: "Active note #2",
          text: "Text of active note #2",
        },
        {
          ...defaultNote,
          id: 2,
          title: "Active note #3",
          text: "Text of active note #3",
          category: CATEGORIES.random,
        },
        {
          ...defaultNote,
          id: 3,
          title: "Active note #4",
          text: "Text of active note #4",
          category: CATEGORIES.random,
        },
        {
          ...defaultNote,
          id: 4,
          title: "Active note #5",
          text: "Text of active note #5",
          category: CATEGORIES.task,
        },
        {
          ...defaultNote,
          id: 5,
          title: "Active note #6",
          text: "Text of active note #6",
          category: CATEGORIES.task,
        },
      ],
      interface: { filter: "Active" },
    },
  },
};
