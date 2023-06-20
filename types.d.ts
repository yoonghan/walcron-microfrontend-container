declare module "remoteApp/appRoutes" {
  import { RouteObject } from "react-router-dom";
  declare const routes: RouteObject[];
  export default routes;
}

declare module "remoteApp/Button" {
  declare const Button: () => import("react/jsx-runtime").JSX.Element;
  export default Button;
}

declare module "remoteApp/GroupButton" {
  interface Props {
    buttons: {
      text: string;
    }[];
  }
  declare const GroupButton: ({
    buttons,
  }: Props) => import("react/jsx-runtime").JSX.Element;
  export default GroupButton;
}
