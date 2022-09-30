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

const mockedState = {
  notes: [
    {
      id: 0,
      date: "April 2, 2021",
      title: "Invention idea",
      text: "If i can find out how to do that thing",
      category: CATEGORIES.idea,
      dates: "",
      archived: false,
    },
    {
      id: 1,
      date: "April 5, 2021",
      title: "The theory of evolution",
      text: "What if dinosaurs was",
      category: CATEGORIES.random,
      dates: "12/20/2012, 01/01/2022",
      archived: false,
    },
    {
      id: 2,
      date: "April 7, 2021",
      title: "Shopping list",
      text: "Tomatoes, bread",
      category: CATEGORIES.task,
      dates: "12/20/2012",
      archived: false,
    },
    {
      id: 3,
      date: "April 7, 2021",
      title: "Invention idea",
      text: "If i can find out how to do that thing",
      category: CATEGORIES.idea,
      dates: "",
      archived: false,
    },
    {
      id: 4,
      date: "April 9, 2021",
      title: "The theory of evolution",
      text: "What if dinosaurs was",
      category: CATEGORIES.random,
      dates: "12/20/2012, 01/01/2022",
      archived: false,
    },
    {
      id: 5,
      date: "April 20, 2021",
      title: "Shopping list",
      text: "Tomatoes, bread",
      category: CATEGORIES.task,
      dates: "12/20/2012",
      archived: false,
    },
    {
      id: 6,
      date: "April 2, 2021",
      title: "Invention idea",
      text: "If i can find out how to do that thing",
      category: CATEGORIES.idea,
      dates: "",
      archived: true,
    },
  ],
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
    initialState: mockedState,
  },
};
