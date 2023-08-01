import { Breadcrumbs, Divider, Link } from "@mui/material";
import { useMemo } from "react";

export default function NavigationBreadcrumb({
  pathname,
}: {
  pathname: string | null;
}) {
  const genLinks = useMemo(() => {
    const dupPaths = (pathname || "/").split("/");
    const paths = [...new Set(dupPaths)];
    let accumulatedPath = "";
    const splittedLinks = paths.map((path, index) => {
      if (path === "") {
        return index === 0 && paths.length > 1 ? (
          <Link underline="hover" color="inherit" href={"/"} key={path}>
            Home
          </Link>
        ) : null;
      } else if (path !== "") {
        accumulatedPath += "/" + path;
        return (
          <Link
            underline="hover"
            color="inherit"
            href={accumulatedPath}
            key={path}
          >
            {path}
          </Link>
        );
      }
    });
    return splittedLinks;
  }, [pathname]);

  console.log("v", genLinks);

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{ p: 1 }}>
        {genLinks}
      </Breadcrumbs>
      {(genLinks || []).length > 1 && <Divider />}
    </>
  );
}
