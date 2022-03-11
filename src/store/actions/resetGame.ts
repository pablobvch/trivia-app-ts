const resetGame = () => {
  return (dispatch: any) => {
    dispatch({ type: "RESET_GAME" });
  };
};

export default resetGame;
