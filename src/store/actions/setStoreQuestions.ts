import { Question } from "types/Question";

const setStoreQuestions = (questions: Question[]) => {
  return (dispatch: any) => {
    dispatch({ type: "SET_STORE_QUESTIONS", payload: questions }); //TODO
  };
};

export default setStoreQuestions;
