import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl mb-4">
        This is an app built in React that can be used to search Github profiles
        and see project details.
      </h1>
      <p>
        Built by{" "}
        <Link
          to="https://github.com/s-palmer"
          className="text-decoration-line: underline"
        >
          Sergei Palmer
        </Link>
      </p>
    </div>
  );
};

export default About;
