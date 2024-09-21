import { Suspense, lazy } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
const Header = lazy(() => import("./Header"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />

      <div>Click on link to Navigate</div>
      <section>
        <Outlet />
      </section>
    </Suspense>
  );
}

export default App;
