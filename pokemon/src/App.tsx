import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPages from "./pages/DetailPages";

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPages />} />
      </Routes>
=======
    <Router basename={process.env.PUBLIC_URL}>
      <div className={`${styles.app} ${resetStyles.reset}`}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:id" element={<DetailPages />} />
        </Routes>
      </div>
>>>>>>> 6b8ba8ecbdbde09eb792f97b3d6174d0b7068d7d
    </Router>
  );
}

export default App;
