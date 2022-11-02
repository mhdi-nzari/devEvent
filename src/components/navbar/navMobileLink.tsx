import { ReactElement } from "react";

import { NavLink } from "react-router-dom";

interface Props {
  header: string;
  icon: () => ReactElement<any, any>;
}

function NavMobileLink(props: Props) {
  return (
    <NavLink to={"/panel"}>
      <li className="menu__item item">
        <div className="item__icon">
          <props.icon />
        </div>
        <h1>{props.header}</h1>
      </li>
    </NavLink>
  );
}

export default NavMobileLink;
