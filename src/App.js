import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import CreateRoutePage from "./pages/CreateRoutePage";
import ErrorPage from "./pages/ErrorPage";
import AllRoutesPage from "./pages/AllRoutesPage";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import DestinationPage from "./pages/DestinationPage";

const titles = {
  "/": {
    route: "",
    header: "Ausflugsziel",
    document: "Swipe&Ride",
  },
  "/destination": {
    route: "destination",
    header: "Ausflugsziel",
    document: "Swipe&Ride",
  },
  "/createRoute": {
    route: "createRoute",
    header: "Erstellen",
    document: "Swipe&Ride",
  },
  "/allRoutes": {
    route: "allRoutes",
    header: "Routen",
    document: "Swipe&Ride",
  }
};

function App() {
  const [pageTitle, setPageTitle] = useState("");
  const [documentTitle, setDocumentTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (Object.keys(titles).indexOf(location.pathname) !== -1) {
      setPageTitle(titles[location.pathname].header);
      setDocumentTitle(titles[location.pathname].document);
    } else {
      setPageTitle("404 Seite existiert nicht");
      setDocumentTitle("404 Seite existiert nicht");
    }
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <Header title={pageTitle} />
      <Routes>
        <Route path="/" element={<DestinationPage title={documentTitle} />} />
        <Route path="/destination" element={<DestinationPage title={documentTitle} />} />
        <Route
          path="/createRoute"
          element={<CreateRoutePage title={documentTitle} />}
        />
        <Route
          path="/allRoutes"
          element={<AllRoutesPage title={documentTitle} />}
        />
        <Route path="*" element={<ErrorPage title={documentTitle} />} />
      </Routes>
      <Footer route={titles[location.pathname].route} />
    </ThemeProvider>
  );
}

export default App;
