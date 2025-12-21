import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GeometricLogoLoader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificate = lazy(() => import("./pages/Certificate"));
const Education = lazy(() => import("./pages/Education"));

function RouteLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <GeometricLogoLoader />;
  }

  return children;
}

function App() {
  return (
    <Router>
      <Navbar />

      <RouteLoader>
        <Suspense fallback={<GeometricLogoLoader />}>
          <Routes>
            <Route path="/paresh-dev" element={<Home />} />
            <Route path="/paresh-dev/projects" element={<Projects />} />
            <Route path="/paresh-dev/achievements" element={<Certificate />} />
            <Route path="/paresh-dev/education" element={<Education />} />
          </Routes>
        </Suspense>
      </RouteLoader>

      <Footer />
    </Router>
  );
}

export default App;
