import type { Meta, StoryObj } from "@storybook/react";
import "../../app/globals.css";
import { Toast } from "./Toast";
import * as DocBlock from "@storybook/blocks";
import * as React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Toast",
  component: Toast,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Heading> Integrated with useToast Hook</DocBlock.Heading>
          <DocBlock.Subtitle>
            Illustrates the integration of the useToast hook within the Toast
            component. This show how the hook is used to trigger toasts with
            various configurations.
          </DocBlock.Subtitle>
          <DocBlock.Source
            dark={true}
            format={true}
            language="jsx"
            code={`
            const Toast = () => {
            const { addToast } = useToast();
            
            const handleClick = () => {
              addToast({
                content: "This is the content",
                isCloseIcon: true,
                parentStyle: { padding: "1rem" },
                contentStyle: { padding: "1rem" },
                closeIconStyling: { padding: "1rem" },
                position: "top-right",
              });
            }

            return (
              <button onClick=(() => handleClick())>Click Me</button>
            );
            };
            `}
          />
          <DocBlock.Subtitle>
            To demostrate we are using the addToast function from useToast hook
            in Toast Component, passing the props in Toast component and then
            passing that into addToast function.
          </DocBlock.Subtitle>
          <DocBlock.Description />
          <DocBlock.Primary />
          <DocBlock.Controls />
          <DocBlock.Stories />
        </>
      ),
    },
    backgrounds: {
      default: "dark",
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    position: "top-right",
    autoHideDuration: 2000,
  },
  argTypes: {
    position: {
      defaultValue: "top-right",
      table: {
        defaultValue: { summary: "top-right" },
      },
    },
    autoHideDuration: {
      defaultValue: 2000,
      table: {
        defaultValue: { summary: "2 sec" },
      },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const toastWithContent: Story = {
  args: {
    content: "A Basic toast",
  },
};

export const toastWithContentAndStyling: Story = {
  args: {
    content: "A Basic toast",
    contentStyle: { backgroundColor: "gray", padding: "1rem" },
  },
};

export const toastWithCloseButton: Story = {
  args: {
    content: "A Basic toast",
    isCloseIcon: true,
  },
};

export const toastWithBottomRightPosition: Story = {
  args: {
    content: "A Basic toast",
    isCloseIcon: true,
    position: "bottom-right",
  },
};

export const toastWithCustomHideDuration: Story = {
  args: {
    content: "A Basic toast",
    autoHideDuration: 5000,
  },
};
