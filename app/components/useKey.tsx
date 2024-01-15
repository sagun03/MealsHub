import { useCallback, useEffect, useRef, useState } from "react";

export type ActionCallback = () => void;

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
type Action = () => void;

const useKey = () => {
  const actionRef = useRef<IUseKey | null>(null);


  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      console.log('e', e, actionRef.current)
      if (actionRef.current && e.key === actionRef.current.key) {
        actionRef.current.action();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
      actionRef.current = null;
    };
  }, []);
  const keyAction = (key: string, action: Action) => {
    actionRef.current = { key, action };
  };
  return { keyAction };
};

export default useKey;
