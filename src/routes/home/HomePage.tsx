import { Link } from "react-router-dom";
import "./styles.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Trivia Challenge</h1>
      <h2>You will be presented with 10 True or False questions</h2>
      <h2>Can you score 100%?</h2>
      <Link to="/questions">Begin</Link>
    </div>
  );
};

export default HomePage;
