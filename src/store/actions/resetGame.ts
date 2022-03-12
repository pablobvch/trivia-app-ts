import { RESET_GAME } from "store/actionTypes.ts";

const resetGame = () => {
  return (dispatch: any) => {
    dispatch({ type: RESET_GAME });
  };
};

export default resetGame;
