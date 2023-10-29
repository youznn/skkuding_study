import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import resetStyles from "../src/styles/Reset.module.css";
import styles from "../src/styles/App.module.css";
import DetailPages from "./pages/DetailPages";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={`${styles.app} ${resetStyles.reset}`}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:id" element={<DetailPages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
