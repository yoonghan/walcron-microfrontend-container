# Walcron Microfrontend Container

Microfrontend used as integration, or forward facing app.

---

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]

## Development commands

Firstly clone from the repository and download the necessary dependencies.

`npm install`

To execute the program for development

`npm run dev`

To run tests

`npm run test`

To build for container / module federation use. If builds successfully a dist/assets/remoteEntry.js will be generated.

`npm run build`

## Integration lessons

1. _forwardRef not found_, can indicate that the reference is having issue. An example is to import <Contact> from profiler project. Sinc "react-router-dom" duplicate both entries, it's required to add into vite.config.ts to share fix <Contact> importing.
2. Imported components with hooks has issue until Node 16 was upgraded to Node 18. It's an error with vite-federation-plugin only.
3. The code is still non agnostic as it interacts between 2 react-router-dom as of current.

## Important variables

Important variables to set into deployer. Setting in Production/Preview is sufficient and let development use the default. Check these settings in vite.config.js.

| Variable          | Description                         | Default        |
| ----------------- | ----------------------------------- | -------------- |
| PROFILER_PROTOCOL | protocol of http/https for profiler | http           |
| PROFILER_DOMAIN   | Domain for profiler                 | localhost:5001 |

## Github PAT permission required

1. For accessing private repo, please allow Profile -> Settings -> Personal Access Token (classic), open read:packages (basically th esame as vercel deployment). For more info refer: https://docs.github.com/en/packages/working-with-a-github-packages-registry. Add as Github secret in Settings->Secrets And variable and add NODE_TOKEN key.

[build-badge]: https://img.shields.io/github/actions/workflow/status/yoonghan/walcron-microfrontend-container/pull-request.yml
[build]: https://github.com/yoonghan/walcron-microfrontend-container/actions?query=workflow
[coverage-badge]: https://img.shields.io/codecov/c/github/yoonghan/walcron-microfrontend-container.svg?style=flat-square
[coverage]: https://codecov.io/gh/yoonghan/walcron-microfrontend-container
