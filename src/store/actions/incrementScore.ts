import { INCREMENT_SCORE } from "store/actionTypes.ts";

const incrementScore = () => {
  return (dispatch: any) => {
    dispatch({ type: INCREMENT_SCORE });
  };
};

export default incrementScore;
