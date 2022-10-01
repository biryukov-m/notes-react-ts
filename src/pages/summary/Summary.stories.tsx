import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withStore } from "../../../.storybook/decorators";
import Summary from "./Summary";
import { CATEGORIES } from "../../utils/config";
import Table from "../../components/Table";

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
export default {
  title: "Summary",
  component: Summary,
  decorators: [
    withStore,
    (story) => <Table sectionClass={"summary"}>{story()}</Table>,
  ],
} as ComponentMeta<typeof Summary>;

const Template: ComponentStory<typeof Summary> = () => <Summary></Summary>;

export const Default = Template.bind({});

export const Empty = Template.bind({});

Empty.parameters = {
  store: {
    initialState: { ...mockedState, notes: [] },
  },
};
