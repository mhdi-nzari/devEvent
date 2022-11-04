import { useState, ReactNode } from "react";

import ArrowIcon from "../assets/icons/ArrowIcon";

interface Props {
  children: ReactNode;
  title: string;
}

function MobileEventsFilterContainer(props: Props) {
  const [collapsed, setCollapsed] = useState(true);

  const collpaseHandler = (e: any) => {
    e.preventDefault();

    setCollapsed((prevValue) => !prevValue);
  };
  return (
    <div className="content__filter-box filter-box" style={{ height: collapsed ? "2rem" : "fit-content" }}>
      <button className={`filter-box__header header ${collapsed ? "collapsed" : ""}`} onClick={collpaseHandler}>
        <h6>{props.title}</h6>
        <div>
          <ArrowIcon />
        </div>
      </button>
      <div className="filter_item_content">{props.children}</div>
    </div>
  );
}

export default MobileEventsFilterContainer;
