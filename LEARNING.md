# Microfront end learning.

Keeping track what is learned from micro-frontend.

## MonoRepo

Creating a main git repo that resides all projects into a root folder. This project however is not a monorepo. These are the findings

_Pros_

1. Only the main package have a package-lock.json and the subprojects does not. Might not mean smaller file as node_modules are still within each projects.
2. May use Nx, Turborepo to help generate cache and build codes.
3. Inter-related projects can be checked/tested before deployed without reliance of e2e test.

_Cons_

1. Project cannot be deployed independantly. This is due to package-lock.json, when running `npm ci`; it looks for package-lock.json.
2. Deployment requires root to be checkout, defeat purpose of independant projects for test/integration and deployment.

## Testing

1. Webpack integrated Microfrontend failed to be tested via Junit. Found out that it hanged.

## Routing

1. Ideally, projects should have their own routing integration. E.g. in chart project, whole RouterProvider is integrated directly.
2. React routing via vite's MFE is not working as expected. Once memoryhistory is used, there is a invalid react hook error. Couldn't figure out the solution for it.
