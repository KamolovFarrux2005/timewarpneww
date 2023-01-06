import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Sidebar = ({ data }) => {
  const { pathname } = useLocation();

  const linkChecker = (link) =>
    pathname.split("/")[2] === link ? "sidebar__link--active" : "";

  return (
    <div className="sidebar">
      {data.map((item) => {
        const link = item.message.split(" ").join("-").toLowerCase();
        return (
          <Link
            className={`sidebar__link sidebar__link ${linkChecker(link)}`}
            key={item.id}
            to={`/admin/${item.message}`}
          >
            {item.message.split(" ")[1]}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
