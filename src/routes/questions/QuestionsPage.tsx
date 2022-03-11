import { Box, Button, Container } from "@material-ui/core";
import Loading from "components/loading";
import he from "he";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import incrementScore from "store/actions/incrementScore";
import setAnswer from "store/actions/setAnswer";
import styled from "styled-components";
import { Question } from "../../types/Question";
import { getQuestions } from "./fetch";
import "./styles.css";

interface Props extends RouteComponentProps {}

const handleOnResponseClick = (
  value: string,
  visibleIndex: number,
  setVisibleIndex: React.Dispatch<React.SetStateAction<number>>,
  incorrect_answers: Question["incorrect_answers"],
  props: Props,
  dispatch: any, //TODO
  question: Question["question"]
) => {
  if (value !== incorrect_answers[0]) {
    dispatch(incrementScore());
    dispatch(setAnswer(question, true));
  } else {
    dispatch(setAnswer(question, false));
  }

  if (visibleIndex < 9) {
    setVisibleIndex(visibleIndex + 1);
  } else {
    props.history.push("/results");
  }
};

const QuestionDiv = styled.div<{ index: number; visibleIndex: number }>`
  display: ${(props) =>
    props.index === props.visibleIndex ? "block" : "none"};
`;

const renderQuestion = (
  { category, question, incorrect_answers }: Question,
  index: number,
  visibleIndex: number,
  setVisibleIndex: React.Dispatch<React.SetStateAction<number>>,
  props: Props,
  dispatch: any
) => (
  <QuestionDiv key={`number_${index}`} {...{ index, visibleIndex }}>
    <Box>
      <h1 className="styled-heading">{category}</h1>
    </Box>
    <Box my={2}>
      <p>{he.decode(question)}</p>
    </Box>
    <Box my={2}>
      <p>{`${index + 1} of 10`}</p>
    </Box>
    <Box>
      <Button
        className="btn-primary btn-mr"
        onClick={() =>
          handleOnResponseClick(
            "True",
            visibleIndex,
            setVisibleIndex,
            incorrect_answers,
            props,
            dispatch,
            question
          )
        }
      >
        True
      </Button>
      <Button
        className="btn-primary"
        onClick={() =>
          handleOnResponseClick(
            "False",
            visibleIndex,
            setVisibleIndex,
            incorrect_answers,
            props,
            dispatch,
            question
          )
        }
      >
        False
      </Button>
    </Box>
  </QuestionDiv>
);

const renderQuestions = (
  questions: Question[],
  visibleIndex: number,
  setVisibleIndex: React.Dispatch<React.SetStateAction<number>>,
  props: Props,
  dispatch: any
) => (
  <Container className="layout">
    {questions.map((question, index) =>
      renderQuestion(
        question,
        index,
        visibleIndex,
        setVisibleIndex,
        props,
        dispatch
      )
    )}
  </Container>
);

const QuestionsPage = (props: Props) => {
  const [questions, setQuestions] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await getQuestions();
      setQuestions(response.results);
    };

    fetchQuestions().catch(console.error);
  }, [dispatch]);

  if (!questions) {
    return <Loading />;
  }

  return (
    questions &&
    renderQuestions(questions, visibleIndex, setVisibleIndex, props, dispatch)
  );
};

export default QuestionsPage;
