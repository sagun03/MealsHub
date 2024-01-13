import type { Meta, StoryObj } from "@storybook/react";
import "../app/globals.css"
import { Toast } from "./Toast";

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
      defaultValue: 'top-right',
      table: {
        defaultValue: { summary: 'top-right' },
      }
    },
    autoHideDuration: {
      defaultValue: 2000,
      table: {
        defaultValue: { summary: '2 sec' },
      }
    },
    childElement: { control: 'text' },
    
  }
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const toastWithContent: Story = {
  args: {
   content: "A Basic toast"
  },
};

export const toastWithContentAndStyling: Story = {
  args: {
   content: "A Basic toast",
   contentStyle: {backgroundColor: "gray", padding: "1rem" }
  },
};

export const toastWithCloseButton: Story = {
  args: {
   content: "A Basic toast",
   isCloseIcon: true
  },
};

export const toastWithBottomRightPosition: Story = {
  args: {
   content: "A Basic toast",
   isCloseIcon: true,
   position: "bottom-right"
  },
};


export const toastWithChildElment: Story = {
  args: {
    childElement: <div>Hi I'm a child elemnt</div>,
   },
};

export const toastWithCustomHideDuration: Story = {
  args: {
   content: "A Basic toast",
   autoHideDuration: 5000
  },
};


