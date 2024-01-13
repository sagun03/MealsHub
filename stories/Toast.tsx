import React from "react";
import useToast, { IAddToast } from "../app/components/useToast";
import ReactDOM from "react-dom";

export const Toast = (props: IAddToast) => {
  const { addToast } = useToast();
  const handleClick = (props: IAddToast) => {
    if (props.childElement && typeof props.childElement === "string") {
        const childNode = document.createElement("div");
        ReactDOM.render(
          <div dangerouslySetInnerHTML={{ __html: props.childElement }} />,
          childNode
        );
        addToast({...props, childElement: childNode as unknown as React.ReactElement});
    } else {
    addToast(props);
    }
  };
  return (
    <div>
      <button
        type="button"
        className="h-auto p-4 bg-white text-black rounded"
        onClick={() => handleClick(props)}
      >
        Click Me
      </button>
    </div>
  );
};
