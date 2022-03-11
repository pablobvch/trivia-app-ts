const incrementScore = () => {
  return (dispatch: any) => {
    dispatch({ type: "INCREMENT_SCORE" }); //TODO
  };
};

export default incrementScore;
