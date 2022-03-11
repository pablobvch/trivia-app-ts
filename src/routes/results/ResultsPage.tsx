import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import resetGame from "store/actions/resetGame";

interface Props extends RouteComponentProps {}

const handleClick = (props: Props, dispatch: any) => {
  dispatch(resetGame());
  props.history.push("/");
};

const ResultsPage = (props: Props) => {
  const dispatch = useDispatch();
  const { score } = useSelector((state: any) => state.score);

  return (
    <div>
      Your Score
      {<p>{`${score}/10`}</p>}
      <button onClick={() => handleClick(props, dispatch)}>Play Again</button>
    </div>
  );
};

export default ResultsPage;
