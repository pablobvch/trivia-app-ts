const getQuestions = async () => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "?amount=10&difficulty=hard&type=boolean"
  );
  return response.json();
};

export { getQuestions };
