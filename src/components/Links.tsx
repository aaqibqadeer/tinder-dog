import { Link } from "react-router-dom";
import { LinkType } from "../types";

export const Links = ({ links }: { links: LinkType[] }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {links.map((link) => (
          <li className="nav-item" key={link.text}>
            <Link to={link.to} className="nav-link">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
