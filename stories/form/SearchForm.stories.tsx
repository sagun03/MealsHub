import type { Meta, StoryObj } from "@storybook/react";
import * as DocBlock from "@storybook/blocks";
import * as React from "react";
import SearchForm from "./SearchForm";
import "../../app/globals.css";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/SearchForm",
  component: SearchForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Heading> Integrated with useToast Hook</DocBlock.Heading>
          <DocBlock.Subtitle>
      
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
          <DocBlock.Description />
          <DocBlock.Primary />
          <DocBlock.Controls />
          <DocBlock.Stories />
        </>
      ),
    },
    backgrounds: {
      default: 'dark',
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {   
  },
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const useKeyWithCustomKey: Story = {
  args: {
    keyValue: "y",
    action: () => {
      const searchInput = document.getElementById("input-search");
      if (searchInput) {
        // Check if the element exists before calling blur
        searchInput.focus();
      }
    },
  },
};

