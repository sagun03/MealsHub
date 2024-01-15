import { useEffect, useRef, useState } from "react";

type ActionCallback = () => void;

export interface IUseKey {
  /**
   * key to trigger the callback function
   */
  key: string;
  /**
   *callback function
   */
  action: ActionCallback;
}
type Action = () => {};

const useKey = () => {
  const [props, setProps] = useState<IUseKey | null>(null);

  const handleKey = (e: KeyboardEvent) => {
    console.log("this is pressed", e);
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKey)

    return () =>  {
      window.removeEventListener('keydown', handleKey)
    }
  }, [])
  const keyAction = (key: string, action: Action) => {
    setProps({ key, action });
  };
  return keyAction;
};

export default useKey;
