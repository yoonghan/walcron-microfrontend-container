import {
  Box,
  Typography,
  CardContent,
  Card,
  CardActions,
  Button,
} from "@mui/material";

type ContentProps = {
  title: string;
  description: string;
  subDescription: string;
  links?: {
    title: string;
    href: string;
  }[];
};

type Props = {
  contents: ContentProps[];
};

const ContentList = ({ contents }: Props) => {
  return (
    <Box
      sx={{
        mt: 8,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {contents.map((content, idx) => (
        <Card key={idx}>
          <CardContent>
            <Typography variant="h5" component="div">
              {content.title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.5 }}>
              {content.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content.subDescription}
            </Typography>
          </CardContent>
          {content.links && (
            <CardActions>
              {content.links.map((link, idx) => (
                <Button key={idx} href={link.href}>
                  {link.title}
                </Button>
              ))}
            </CardActions>
          )}
        </Card>
      ))}
    </Box>
  );
};

export default ContentList;
