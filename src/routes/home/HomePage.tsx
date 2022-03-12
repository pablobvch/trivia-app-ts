import { Button } from "@material-ui/core";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import "../../../src/App.css";
import "./styles.css";

const HomePage = () => {
  return (
    <Container className="layout" maxWidth="sm">
      <Box>
        <h1 className="styled-heading styled-heading-bigger">
          Welcome to the Trivia Challenge
        </h1>
      </Box>
      <Box mt={2} mb={1}>
        <h3 className="styled-heading--dark">
          You will be presented with 10 True or False questions
        </h3>
      </Box>
      <Box mt={1} mb={2}>
        <h3 className="styled-heading--dark">Can you score 100%?</h3>
      </Box>
      <Box>
        <Button variant="contained" className="btn-primary">
          <Link to="/questions">Begin</Link>
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
