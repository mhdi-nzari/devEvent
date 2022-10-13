import "../styles/header.scss";

interface Props {
  icon: string;
  title: string;
}

function Header({ icon, title }: Props) {
  return (
    <div className={"header__container"}>
      <img src={icon} alt="" />
      <h2>{title}</h2>
    </div>
  );
}

export default Header;
