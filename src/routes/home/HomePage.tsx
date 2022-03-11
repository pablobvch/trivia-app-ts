import { Button } from "@material-ui/core";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import "../../../src/App.css";
import "./styles.css";

const HomePage = () => {
  return (
    <Container className="home-container" maxWidth="sm">
      <Box>
        <h1 className="styled-heading--dark">
          Welcome to the Trivia Challenge
        </h1>
      </Box>
      <Box my={2}>
        <h2 className="styled-heading">
          You will be presented with 10 True or False questions
        </h2>
      </Box>
      <Box my={2}>
        <h2 className="styled-heading">Can you score 100%?</h2>
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
