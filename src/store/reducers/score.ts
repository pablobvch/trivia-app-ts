import { Action } from "types/Action";

const initialState = {
  score: 0,
  answers: [],
  questions: []
};

const score = (state = initialState, action: Action) => {
  switch (action.type) {
    case "INCREMENT_SCORE": {
      const newState = { ...state, score: state.score + 1 };
      return newState;
    }
    case "RESET_GAME": {
      const newState = initialState;
      return newState;
    }
    case "SET_STORE_QUESTIONS": {
      const newState = { ...state, questions: action.payload };
      return newState;
    }
    default:
      return state;
  }
};

export default score;
