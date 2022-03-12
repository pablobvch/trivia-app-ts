import { SET_ANSWER } from "store/actionTypes.ts";
import { Question } from "types/Question";

const setAnswer = (question: Question["question"], result: boolean) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_ANSWER,
      payload: { question: question, result: result }
    });
  };
};

export default setAnswer;
