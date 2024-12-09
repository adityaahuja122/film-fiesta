import React from "react";
import { Footer, Header } from "./components";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/scrollToTop";

const App = () => {
  return (
    <>
      <Header />
      <div className="dark:bg-slate-800">
        <main className="max-w-screen-xl">
        <ScrollToTop/>
          <AppRoutes />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
