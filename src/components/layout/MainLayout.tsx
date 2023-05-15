import { Footer, Header } from "components/common";
import { Outlet } from "react-router-dom";

export interface MainLayoutProps {}

export function MainLayout({}: MainLayoutProps) {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
