import { INCREMENT_SCORE, RESET_GAME, SET_ANSWER } from "store/actionTypes.ts";
import { Action } from "types/Action";
import { Answer } from "types/Answer";

const initialState = {
  score: 0,
  answers: []
};

const addAnswerToAnswers = (answers: Answer[], payload: any) => [
  ...answers,
  { question: payload.question, result: payload.result }
];

const score = (state = initialState, action: Action) => {
  switch (action.type) {
    case INCREMENT_SCORE: {
      const newState = { ...state, score: state.score + 1 };
      return newState;
    }
    case RESET_GAME: {
      const newState = initialState;
      return newState;
    }
    case SET_ANSWER: {
      const newState = {
        ...state,
        answers: addAnswerToAnswers(state.answers, action.payload)
      };
      return newState;
    }
    default:
      return state;
  }
};

export default score;
