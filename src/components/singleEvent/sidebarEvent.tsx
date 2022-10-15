import { Link } from "react-router-dom";

interface Props {
  imageSpace: string;
  title: string;
  dscr: string;
}

function SidebarEvent({ imageSpace, title, dscr }: Props) {
  return (
    <div className="more__event event">
      <div className="event__image">
        <img src={imageSpace} alt="" />
      </div>
      <div className="event__content">
        <h5>{title}</h5>
        <p>{dscr}</p>
      </div>
      <Link to={`/events/${title.replaceAll(" ", "-")}`}>
        <button>
          <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.939 4.50001C17.939 4.16833 17.6567 3.89944 17.3084 3.89944L8.69129 3.89944L8.69129 2.20612C8.69129 0.378759 6.48935 -0.65349 4.9691 0.461193L1.84063 2.75507C0.638408 3.63656 0.63841 5.36344 1.84063 6.24493L4.96911 8.53881C6.48936 9.65349 8.69129 8.62124 8.69129 6.79387L8.69129 5.10057L17.3084 5.10057C17.6567 5.10057 17.939 4.83169 17.939 4.50001Z"
              fill="#DA9E03"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}

export default SidebarEvent;
