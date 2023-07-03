
    declare module "profiler/SignIn" {
      export default function SignIn({ onSignIn }: {
    onSignIn: () => void;
}): import("react/jsx-runtime").JSX.Element;

    }
    
    declare module "profiler/Button" {
      const Button: () => import("react/jsx-runtime").JSX.Element;
export default Button;

    }
    
    declare module "profiler/GroupButton" {
      interface Props {
    buttons: {
        text: string;
    }[];
}
const GroupButton: ({ buttons }: Props) => import("react/jsx-runtime").JSX.Element;
export default GroupButton;

    }
    
    declare module "profiler/appRoutes" {
      import { RouteObject } from "react-router-dom";
type Props = {
    onSignIn: () => void;
    onSignOut: () => void;
};
const routes: (path: string, errorElement?: import("react/jsx-runtime").JSX.Element, props?: Props) => RouteObject;
export default routes;

    }
    
    declare module "profiler/Contact" {
      export default function Contact(): import("react/jsx-runtime").JSX.Element;

    }
    
    declare module "profiler/Basic" {
      const _default: () => import("react/jsx-runtime").JSX.Element;
export default _default;

    }
    