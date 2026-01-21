import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import NavBar from "./components/saas/NavBar";

function App() {
  const location = useLocation();

  // Decide margin based on route
  let mainMargin = "";

  if (location.pathname !== "/" && location.pathname !== "/app") {
    mainMargin = "mt-[90px] md:mt-[100px] lg:mt-[85px]";
  }

  // mt-[90px] md:mt-[100px] lg:mt-[85px]

  // mt-[70px] md:mt-[90px] lg:mt-[100px]

  return (
    <div className="relative overflow-hidden">
      <ScrollToTop />
      <div className="">
        {/* {!hideNavbar && <NavBar />} */}
        {/* <NavBar /> */}
        <main className={mainMargin}>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}

export default App;
