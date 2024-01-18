import type { Meta, StoryObj } from "@storybook/react";
import * as DocBlock from "@storybook/blocks";
import * as React from "react";
import SearchForm from "./SearchForm";
import "../../app/globals.css";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ShortcutKeys",
  component: SearchForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      page: () => (
        <>
          <DocBlock.Title>Shortkey Hook for Keyboard Events</DocBlock.Title>
          <DocBlock.Subtitle>
            {" "}
            we will explore the creation of a custom hook named{" "}
            <strong>useKey</strong> that facilitates the handling of keyboard
            shortcuts in a React application. The hook takes two arguments:{" "}
            <strong>key</strong> (a string representing the keyboard key) and{" "}
            <strong>action</strong> (a callback function triggered when the
            specified key is pressed).
          </DocBlock.Subtitle>{" "}
          <DocBlock.Heading>Key Concepts Used</DocBlock.Heading>
          <DocBlock.Subtitle>
            <ul>
              <li>
                1. <strong>useEffect</strong>: The useEffect hook is employed to
                handle the side effect of setting up and cleaning up event
                listeners for keyboard events.
              </li>
              <li>
                2. <strong>Event Listeners</strong>: Event listeners are used to
                detect keyboard events and trigger the associated actions.
              </li>
            </ul>
            <br />
          </DocBlock.Subtitle>
          <DocBlock.Title>Example: Search Component</DocBlock.Title>
          <DocBlock.Subheading>
            {" "}
            let's consider the implementation of a search component that
            utilizes the <strong>useKey</strong> hook. The search component
            accepts two arguments: key and action, which are used to define a
            keyboard shortcut for triggering a search action
          </DocBlock.Subheading>{" "}
          <DocBlock.Source
            dark={true}
            format={true}
            language="jsx"
            code={`
import React, { useState, useEffect } from 'react';
import useKey from './useKey'; // Assuming the useKey hook is in the same directory

const SearchComponent = ({ key, action }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Utilize the useKey hook to define a keyboard shortcut
  const { keyAction } = useKey();

  // Set up the keyboard shortcut using useEffect
  useEffect(() => {
    keyAction(key, action);
  }, [key, action]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <label>Search:</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchComponent;

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
      default: "dark",
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    keyValue: {
      defaultvalue: "y",
      table: {
        defaultValue: { summary: "y" },
      },
    },
    action: {
      table: {
        defaultValue: {
          summary: () => {
            const searchInput = document.getElementById("input-search");
            if (searchInput) {
              // Check if the element exists before calling blur
              searchInput.focus();
            }
          },
        },
      },
    },
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
