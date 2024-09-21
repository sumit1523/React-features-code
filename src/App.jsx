import { Suspense, lazy } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
const Header = lazy(() => import("./Header"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        style={{
          display: "inline-flex",
          position: "fixed",
          top: "0px",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Header />
      </div>
      <div>Click on link to Navigate</div>
      <section>
        <Outlet />
      </section>
    </Suspense>
  );
}

export default App;
