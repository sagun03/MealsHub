import React, { useEffect, useRef, useState } from "react";

export type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center"
  | "top-center"
  | "bottom-center";

export interface IAddToast {
  /**
   * message for toast (not mandatory)
   */
  content?: string;
  /**
   * css for main div of toast (not mandatory)
   */
  parentStyle?: React.CSSProperties;
  /**
   * css for message of toast (not mandatory)
   */
  contentStyle?: React.CSSProperties;
  /**
   * close icon for toast (not mandatory)
   */
  isCloseIcon?: boolean;
  /**
   * styling for close icon of toast (not mandatory)
   */
  closeIconStyling?: React.CSSProperties;
  /**
   * position of toast
   * default set to top-left
   */
  position?: ToastPosition;
  /**
   * hide duration fo the toast
   * default set to 2 sec
   */
  autoHideDuration?: number;
}

const useToast = () => {
  const [showToast, setShowToast] = useState(false);
  const [props, setProps] = useState<IAddToast>({});
  // to store the set timout so that we can clear it when click on close
  const timeoutRef = useRef<number | null>(null);

  const addToast = (props: IAddToast) => {
    const { autoHideDuration = 2000 } = props;
    setShowToast(true);
    setProps(props);
    if (!timeoutRef.current) {
    timeoutRef.current = window.setTimeout(() => {
      setShowToast(false);
      setProps({});
    }, autoHideDuration);
  }
  };
  const getPositionStyles = (position: string) => {
    switch (position) {
      case "top-left":
        return {
          top: "1.5rem",
          left: "1.5rem",
          bottom: "unset",
          right: "unset",
        };
      case "top-right":
        return {
          top: "1.5rem",
          right: "1.5rem",
          bottom: "unset",
          left: "unset",
        };
      case "bottom-left":
        return {
          bottom: "1.5rem",
          left: "1.5rem",
          top: "unset",
          right: "unset",
        };
      case "bottom-right":
        return {
          bottom: "1.5rem",
          right: "1.5rem",
          top: "unset",
          left: "unset",
        };
      case "top-center":
        return {
          top: "1.5rem",
          right: "51%",
          transform: "translateX(50%)",
          bottom: "unset",
          left: "unset",
        };
      case "bottom-center":
        return {
          bottom: "1.5rem",
          right: "50%",
          transform: "translateX(50%)",
          top: "unset",
          left: "unset",
        };
      default:
        return {};
    }
  };

  useEffect(() => {
    if (showToast) {
      const {
        content,
        isCloseIcon,
        parentStyle,
        contentStyle,
        closeIconStyling,
        position = "top-right",
      } = props;
      const portalElement = document.createElement("div");
      // adding tailwind css for base styleing of toast
      portalElement.classList.add(
        "bg-white",
        "text-black",
        "p-4",
        "fixed",
        "z-10",
        "top-10",
        "right-10",
        "shadow-md",
        "border",
        "rounded",
        "w-1/5",
        "h-auto",
        "shadow-xl"
      );

      if (content) {
        const pElement = document.createElement("p");
        pElement.textContent = content;
        // Apply custom styles on content
        if (contentStyle) {
          Object.entries(contentStyle).forEach(
            ([key, value]: [string, string]) => {
              pElement.style[key as any] = value;
            }
          );
        }
        portalElement.appendChild(pElement);
      }

      // will add close icon if passed
      if (isCloseIcon) {
        const closeIcon = document.createElement("span");
        closeIcon.innerHTML = "&times;";
        closeIcon.classList.add(
          "absolute",
          "top-0",
          "right-0",
          "cursor-pointer",
          "p-2"
        );

        if (closeIconStyling) {
          Object.entries(closeIconStyling).forEach(
            ([key, value]: [string, string]) => {
              closeIcon.style[key as any] = value;
            }
          );
        }

        closeIcon.onclick = () => {
          // we clear timeout and remove toast on close
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          timeoutRef.current = null;
          setShowToast(false);
          document.body.removeChild(portalElement);
        };

        portalElement.appendChild(closeIcon);
      }

      // Apply custom styles on parent
      if (parentStyle) {
        Object.assign(portalElement.style, parentStyle);
      }

      // Apply position styles
      if (position) {
        Object.entries(getPositionStyles(position)).forEach(
          ([key, value]: [string, string]) => {
            portalElement.style[key as any] = value;
          }
        );
      }

      document.body.appendChild(portalElement);

      const cleanup = () => {
        setShowToast(false);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = null;
        if (document.body.contains(portalElement)) {
          document.body.removeChild(portalElement);
        }
      };

      return cleanup;
    }
  }, [showToast, props]);

  return { addToast };
};

export default useToast;
