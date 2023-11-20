import type { Meta, StoryObj } from "@storybook/react";

import { AnchorButton } from "./index";

const meta: Meta<typeof AnchorButton> = {
  title: "AnchorButton",
  component: AnchorButton,
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

type Story = StoryObj<typeof AnchorButton>;

export const Primary: Story = {
  args: {
    variant: "contained",
    theme: "primary",
    href: "/",
    children: "AnchorButton",
  },
};
