
    declare module "chart/App1Index" {
      import { RoutingStrategy } from "./routing/types";
const mount: ({ mountPoint, initialPathname, routingStrategy, }: {
    mountPoint: HTMLElement;
    initialPathname?: string | undefined;
    routingStrategy?: RoutingStrategy | undefined;
}) => () => void;
export { mount };

    }
    