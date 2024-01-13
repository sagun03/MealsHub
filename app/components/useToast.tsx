import React, { useEffect, useState } from "react";

type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center"
  | "top-center"
  | "bottom-center";

export interface IAddToast {
  content?: string;
  childElement?: Element;
  parentStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  hasClose?: boolean;
  closeIconStyling?: React.CSSProperties;
  position?: ToastPosition;
  autoHideDuration?: number;
}

const useToast = () => {
  const [showToast, setShowToast] = useState(false);
  const [props, setProps] = useState<IAddToast>({});

  const addToast = (props: IAddToast) => {
    const { autoHideDuration = 2000 } = props;
    setShowToast(true);
    setProps(props);
    setTimeout(() => {
      setShowToast(false);
      setProps({});
    }, autoHideDuration);
  };

  const getPositionStyles = (position: string) => {
    switch (position) {
      case "top-left":
        return { top: "10", left: "10" };
      case "top-right":
        return { top: "10", right: "10" };
      case "bottom-left":
        return { bottom: "10", left: "10" };
      case "bottom-right":
        return { bottom: "10", right: "10" };
      case "top-center":
        return { top: "10", right: "50%" };
    case "bottom-center":
        return { bottom: "10", right: "50%" };
      default:
        return {};
    }
  };

  useEffect(() => {
    if (showToast) {
      const {
        content,
        childElement,
        hasClose,
        parentStyle,
        contentStyle,
        closeIconStyling,
        position = "top-right",
      } = props;
      const portalElement = document.createElement("div");
      // base css using tailwind
      portalElement.classList.add(
        "bg-white",
        "text-black",
        "p-4",
        "absolute",
        "top-10",
        "right-10",
        "shadow-md",
        "border",
        "rounded",
        "w-1/5",
        "h-auto",
        "shadow-xl"
      );
      const pElement = document.createElement("p");

      if (content) {
        pElement.textContent = content;
        // Apply custom styles on content
        if (contentStyle) {
          Object.assign(pElement.style, contentStyle);
        }
        portalElement.appendChild(pElement);
      }

      if (childElement) portalElement.appendChild(childElement);

      if (hasClose) {
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
          Object.assign(closeIcon.style, closeIconStyling);
        }

        closeIcon.onclick = () => {
          pElement.remove();
        };

        portalElement.appendChild(closeIcon);
      }

      // Apply custom styles on parent
      if (parentStyle) {
        Object.assign(portalElement.style, parentStyle);
      }

      // Apply position styles
      if (props.position) {
        Object.assign(portalElement.style, getPositionStyles(props.position));
      }

      document.body.appendChild(portalElement);

      const cleanup = () => {
        document.body.removeChild(portalElement);
      };

      return cleanup;
    }
  }, [showToast, props]);

  return { addToast };
};

export default useToast;
