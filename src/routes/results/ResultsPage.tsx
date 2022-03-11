import { Box, Button, Container } from "@material-ui/core";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import he from "he";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import resetGame from "store/actions/resetGame";
import { Answer } from "../../types/Answer";
import "./styles.css";

interface Props extends RouteComponentProps {}

const renderAnswer = (answer: Answer, index: number) => (
  <Box
    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    my={1}
    key={`item-${index}`}
  >
    {answer.result ? (
      <CheckIcon className="style-icon--ok" />
    ) : (
      <CloseIcon className="style-icon--wrong" />
    )}
    {he.decode(answer.question)}
  </Box>
);

const renderAnswers = (answers: Answer[]) =>
  answers.map((answer, index) => renderAnswer(answer, index));
//renderAnswer(answers[1], 1);

const handleClick = (props: Props, dispatch: any) => {
  dispatch(resetGame());
  props.history.push("/");
};

const ResultsPage = (props: Props) => {
  const dispatch = useDispatch();
  const { score, answers } = useSelector((state: any) => state.score);

  return (
    <Container className="layout">
      <Box>
        <h1 className="styled-heading">Your Score</h1>
      </Box>
      <Box>{<h2 className="styled-heading--green">{`${score}/10`}</h2>}</Box>
      {renderAnswers(answers)}
      <Box>
        <Button
          className="btn-primary"
          onClick={() => handleClick(props, dispatch)}
        >
          Play Again
        </Button>
      </Box>
    </Container>
  );
};

export default ResultsPage;
