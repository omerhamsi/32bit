import Menu from "./component/Menu.js";
import "./style/App.css"
import Footer from "./component/Footer.js";
import { useTranslation } from "react-i18next";
import { Suspense, useEffect } from "react";
import i18n from "i18next"
import { initReactI18next } from 'react-i18next';
function App() {
  const { t } = useTranslation()
  useEffect(() => {
    localStorage.setItem("lng", localStorage.getItem("lng") ? localStorage.getItem("lng") : "en")
  })
  return (
    <Suspense fallback="loading">
      <div className="App">
        <div className="content">
          <Menu />
          <div className="title">
            <h1 style={{ fontSize: "70px" }}>{t("sample")}</h1>
            <p>{t("welcome")}</p>
          </div>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
