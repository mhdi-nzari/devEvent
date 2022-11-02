import Navbar from "../components/navbar/navbar";

function Layout(props: any) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default Layout;
