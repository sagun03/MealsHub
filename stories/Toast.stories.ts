import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from "./Toast";
import { ToastPosition } from "../app/components/useToast";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/useToast",
  component: Toast,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    position: 'top-right',
    autoHideDuration: 2000
  },
  argTypes: {
    position: {
      defaultValue: 'top-right'
    },
    autoHideDuration: {
      defaultValue: 2000
    }
  }
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
   content: "A Basic toast"
  },
};

export const Secondary: Story = {
  args: {
    content: "A Basic toast"
   },
};

export const Large: Story = {
  args: {
    content: "A Basic toast"
   },
};

export const Small: Story = {
  args: {
    content: "A Basic toast"
   },
};
