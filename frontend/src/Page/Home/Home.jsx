import Cookies from "js-cookie";
import "./Home.css";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
    <div className="home-container">
      <h1>Welcome Home</h1>
      <p>
        This project is a simple login and logout system in a React.js and Node.js
        application using a database (SQLite). Register (sign up) with email and
        password. Log in using the registered credentials. Stay logged in using
        session/cookie-based authentication. Log out and clear the session.
      </p>
    </div>
    </>
  );
};

export default Home;
