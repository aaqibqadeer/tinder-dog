import { useContext } from "react";
import { ActionContext } from "../context";

export const withAction = (Component: React.FC) => {
  const ActionConsumer = (props: unknown) => {
    const context = useContext(ActionContext);
    return <Component {...props} {...context} />;
  };
  return ActionConsumer;
};
