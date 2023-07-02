# Microfront end learning.

Keeping track what is learned from micro-frontend.

## MonoRepo

Creating a main git repo that resides all projects into a root folder. This project however is not a monorepo. These are the findings

_Pros_

1. Only the main package have a package-lock.json and the subprojects does not. Might not mean smaller file as node_modules are still within each projects.
2. May use Nx, Turborepo to help generate cache and build codes.
3. Inter-related projects can be checked/tested before deployed without reliance of e2e test.
4. Can delay Container/Host application deployment, which everytime a remote/submodule changes the container will not be deployed; it will only be deployed when there is a manual action on it. Good in maintaining versioning and stability.

_Cons_

1. Project cannot be deployed independantly. This is due to package-lock.json, when running `npm ci`; it looks for package-lock.json.
2. Deployment requires root to be checkout, defeat purpose of independant projects for test/integration and deployment. But then can result remote site failing unexpectedly, unless e2e test a e2e test is included via container/host site.

## Testing

1. Webpack integrated Microfrontend failed to be tested via Junit. Found out that it hanged. Suspect promise is returned but couldn't trigger it even with await.

## Routing

1. Ideally, projects should have their own routing integration. E.g. in chart project, whole RouterProvider is integrated directly.
2. React routing via vite's MFE is not working as expected. Once memoryhistory is used, there is a invalid react hook error. Couldn't figure out the solution for it.

## Import

1. Implementation for main call should move App into bootstrap.js and use 'import("bootstrap")' instead of calling <App> directly. Reason is that import with brackets supports async call (import \* from '' is sync), this helps support any remote component calls that returns Promise instead of direct components.
