import { ActionProvider } from "./actionProvider";
const Providers = [ActionProvider];

export const RootProvider = ({ children }) => {
  Providers.forEach((Provider) => {
    children = <Provider> {children} </Provider>;
  });
  return children;
};
