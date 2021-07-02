import { useState } from "react";
import { ActionState } from "../../types";
import { ActionContext } from "../context";

export const ActionProvider = ({ children }: { children: unknown }) => {
  const [action, setAction] = useState<ActionState[]>([]);

  const appendAction = (newAction: ActionState) => {
    setAction([...action, newAction]);
  };

  const value = {
    action,
    appendAction,
  };

  return (
    <ActionContext.Provider value={value}> {children} </ActionContext.Provider>
  );
};
