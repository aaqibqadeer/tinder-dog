import { Link } from "react-router-dom";
import { Links } from "./";

export const Header = () => {
  const links = [
    { text: "Home", to: "/" },
    { text: "History", to: "/history" },
  ];

  return (
    <nav className="mb-5 navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid mx-2">
        <Link to="/" className="navbar-brand">
          Dinger
        </Link>
        <Links links={links} />
      </div>
    </nav>
  );
};
