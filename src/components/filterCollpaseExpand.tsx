import { useState, ReactNode } from "react";

import Arrow from "./../assets/icons/arrow.svg";

import "../styles/events.scss";

function FilterCollpaseExpand({ title, children }: { title: string; children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  const collpaseHandler = (e: any) => {
    e.preventDefault();

    setCollapsed((prevValue) => !prevValue);
  };
  return (
    <div className="filter_item" style={{ height: collapsed ? "5rem" : "fit-content" }}>
      <div className="filter_item_header">
        <h6>{title}</h6>
        <button onClick={collpaseHandler}>
          {collapsed ? "مشاهده" : "پنهان"}
          <img src={Arrow} alt="" className={collapsed ? "collapsed" : "extended"} />
        </button>
      </div>
      <div className="filter_item_content">{children}</div>
    </div>
  );
}

export default FilterCollpaseExpand;
