import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NoteRow, Props } from "./NotesNoteRow";
import { CATEGORIES } from "../../utils/config";

export default {
  component: NoteRow,
  title: "NoteRow",
} as ComponentMeta<typeof NoteRow>;

const Template: ComponentStory<typeof NoteRow> = (args: Props) => (
  <NoteRow {...args} />
);

export const Default = Template.bind({});

Default.args = {
  note: {
    id: 1,
    date: "April 5, 2021",
    title: "The theory of evolution",
    text: "What if dinosaurs was",
    category: CATEGORIES.random,
    dates: "12/20/2012, 01/01/2022",
    archived: false,
  },
};
