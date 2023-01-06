import React from "react";
import { Link } from "react-router-dom";

const PageRoute = ({ current = "", links = [] }) => {
  return (
    <div className="pageRoute">
      <Link to={"/admin"}>Dashboard</Link> /
      {links.map((link) => {
        return (
          <>
            <Link to={link?.route} key={link?.route + link?.txt}>
              {link?.txt}
            </Link>{" "}
            /
          </>
        );
      })}
      <h3>{current}</h3>
    </div>
  );
};

export default PageRoute;
