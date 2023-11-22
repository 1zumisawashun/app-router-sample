import type { Meta, StoryObj } from "@storybook/react";

import { InputCheckboxGroup } from "./index";

const meta: Meta<typeof InputCheckboxGroup> = {
  title: "InputCheckboxGroup",
  component: InputCheckboxGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
};

export default meta;

type Story = StoryObj<typeof InputCheckboxGroup>;

export const Primary: Story = {
  args: {
    options: [
      { label: "InputCheckboxGroup1", value: "InputCheckboxGroup1" },
      { label: "InputCheckboxGroup2", value: "InputCheckboxGroup2" },
      { label: "InputCheckboxGroup3", value: "InputCheckboxGroup3" },
    ],
  },
};
