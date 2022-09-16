import Navbar from "components/navbar";

function Layout(props: any) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default Layout;
