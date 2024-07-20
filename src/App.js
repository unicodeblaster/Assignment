import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TODONavEditlistDark from "./pages/t-o-d-o-nav-editlist-dark";
import TODOEditlistDark from "./pages/t-o-d-o-editlist-dark";
import TODONavblockDark from "./pages/t-o-d-o-navblock-dark";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/to-do-editlistdark":
        title = "";
        metaDescription = "";
        break;
      case "/to-do-navblockdark":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TODONavEditlistDark />} />
      <Route path="/to-do-editlistdark" element={<TODOEditlistDark />} />
      <Route path="/to-do-navblockdark" element={<TODONavblockDark />} />
    </Routes>
  );
}
export default App;
