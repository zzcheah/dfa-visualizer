import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const recolor = {
  color: "rgb(33, 43, 54)",
};

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

export default function CustomAppBar() {
  const classes = useStyles();

  return (
    // <header>
    <Box sx={{ flexGrow: 1, mb: "32px" }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container>
            <Typography
              variant="h6"
              component="div"
              sx={{ ...recolor, flexGrow: 1 }}
            >
              DFA Recognizer
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </Box>
    // </header>
  );
}
