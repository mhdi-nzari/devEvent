interface Props {
  icon: string;
  title: string;
  containerClassName: string;
}

function Header({ icon, title, containerClassName }: Props) {
  return (
    <header className={containerClassName + "__header"}>
      <img src={icon} alt="" />
      <h2>{title}</h2>
    </header>
  );
}

export default Header;
