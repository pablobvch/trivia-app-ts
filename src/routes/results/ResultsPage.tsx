import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import resetGame from "store/actions/resetGame";
import { Answer } from "../../types/Answer";

interface Props extends RouteComponentProps {}

const renderAnswer = (answer: Answer) => (
  <div>
    {answer.result ? <div>+</div> : <div>-</div>}
    {answer.question}
  </div>
);

const renderAnswers = (answers: Answer[]) =>
  answers.map((answer) => renderAnswer(answer));

const handleClick = (props: Props, dispatch: any) => {
  dispatch(resetGame());
  props.history.push("/");
};

const ResultsPage = (props: Props) => {
  const dispatch = useDispatch();
  const { score, answers } = useSelector((state: any) => state.score);

  return (
    <div>
      Your Score
      {<p>{`${score}/10`}</p>}
      {renderAnswers(answers)}
      <button onClick={() => handleClick(props, dispatch)}>Play Again</button>
    </div>
  );
};

export default ResultsPage;
