import React from "react";
import useToast, { IAddToast } from "../../app/components/useToast";

export const Toast = (props: IAddToast) => {
  const { addToast } = useToast();
  const handleClick = (props: IAddToast) => {
    addToast(props);
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
