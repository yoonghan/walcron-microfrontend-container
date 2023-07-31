import { Container, Box, Typography } from "@mui/material";
import ContentList from "./ContentList";

export default function MainPage() {
  return (
    <Container component="main" maxWidth="md" sx={{ pb: 10 }}>
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h3" align="center">
          Walcron's Microfrontend
        </Typography>
        <Typography component="p" align="center">
          A proof of concept on how microfront-end works and how all of these
          component can be tied to work together. Base implementation are via
          <strong> Module Federation</strong>.
        </Typography>
      </Box>
      <ContentList
        contents={[
          {
            title: "NPM shared library",
            description:
              "Prepare a shared component library to ensure consistent and harmony design. This library should be free from 3rd party libraries, i.e. in our case it's free from Material Design, react router library. If libraries are needed, pass it as props.",
            subDescription:
              'We used "microfrontend-shared-component" that shares the User Interface.',
            links: [
              {
                title: "Learn More",
                href: "https://github.com/yoonghan/walcron-microfrontend-shared",
              },
            ],
          },
          {
            title: "Module Federation",
            description:
              "A tool to stitch 2 or more projects into a singular project. The primary use of module federation is the flexibility to remotely load JS libraries and have it working together.",
            subDescription:
              "The challenge we had here is Vite's module federation doesn't expose react-router-dom well. To overcome it, only the routes are exposed and react-router-dom is handled by the container.",
          },
          {
            title: "Module Federation - Typescript declaration",
            description:
              "(This is not an out of the box function) To allow Typescript to be exposed via projects, the alternative is to generate d.ts via build and push the declaration into projects that requires it.",
            subDescription:
              "Profiler's library generates a typescript declaration resides in external_modules folder and does a pull request in Container project.",
            links: [
              {
                title: "Learn More",
                href: "https://github.com/yoonghan/walcron-microfrontend-profiler/blob/master/.github/workflows/merge.yml",
              },
            ],
          },
          {
            title: "Distributed Repository",
            description:
              "Leverage on Github to allow CI/CD to be implemented per project based. The framework is to have only 1 container that host all other projects. The benefit of this approach is that each project can be deployed at anytime.",
            subDescription:
              "The flaky part is that new projects may break when new implementation/workflow is added, one such issue was the early adoption for react-router-dom. To overcome this, future approach is to have version control by exposing stepped up federationExposedComponents.",
            links: [
              {
                title: "Learn More",
                href: "https://github.com/yoonghan/walcron-microfrontend",
              },
            ],
          },
          {
            title: "React Router DOM",
            description:
              "(Complex) Exposed react-router-dom need to be wrap and called independantly from projects and Best not to be shared. A NavigatorListener acts like a parent/child communication to inform page between projects are navigated.",
            subDescription:
              "Directly exposing react-router-dom and shared with Vite's module federation did not work, but via webpack's module federation it worked. Upgrades of react-router-dom v6 amplifies the fragality of breaking changes as well.",
            links: [
              {
                title: "Navigator Listener",
                href: "https://github.com/yoonghan/walcron-microfrontend-shared/tree/master/src/components/helpers/routes/useNavigationListener",
              },
              {
                title: "Implementation",
                href: "https://github.com/yoonghan/walcron-microfrontend-container/tree/master/src/components/Profiler",
              },
            ],
          },
          {
            title: "Material Design",
            description:
              "Best to import style library dependency independantly.",
            subDescription:
              "Theming needs to be custom written with MUI when written with react-router-dom.",
            links: [
              {
                title: "Learn More",
                href: "https://github.com/yoonghan/walcron-microfrontend-container/blob/master/src/components/style/theme.tsx",
              },
            ],
          },
          {
            title: "Authentication",
            description:
              "The shell/container shall be the authentication controller, all projects should source from 1 single golden source. An authentication context should be a good source to control it.",
            subDescription:
              "Another approach is to use oAuth2, which every project will read a header cookie, but the implementation is costly for this proof of concept.",
            links: [
              {
                title: "Implementation",
                href: "https://github.com/yoonghan/walcron-microfrontend-container/blob/master/src/components/Profiler/index.tsx",
              },
            ],
          },
          {
            title: "Caching",
            description:
              "Caching of sub projects may cause the container project to load previous out-dated-pages.",
            subDescription: "Still in evaluation.",
          },
          {
            title: "Testing",
            description: "Work in progress",
            subDescription:
              "Able to implement Unit testing, but approach for container project is still in evaluation.",
          },
        ]}
      />
    </Container>
  );
}
