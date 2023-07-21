
    declare module "profiler/appRoutes" {
      import { ReactNode } from "react";
import { RouteObject } from "react-router-dom";
type Props = {
    onSignIn: () => void;
    onSignOut: () => void;
};
const routes: ({ appName, containerName, errorElement, props, }: {
    appName?: string | undefined;
    containerName?: string | undefined;
    errorElement?: ReactNode;
    props: Props;
}) => RouteObject;
export default routes;

    }
    