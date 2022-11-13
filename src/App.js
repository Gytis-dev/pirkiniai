import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "./pages/Form/Form";
import { Home } from "./pages/Home/Home";
import { Menu } from "./components/Menu";
import { useState } from "react";

export const App = () => {
  const [state, setState] = useState([]);

  return (
    <BrowserRouter basename="/">
      <Menu />
      <Routes>
        <Route
          path="/pirkiniai"
          element={<Home state={{ state, setState }} />}
        />
        <Route
          path="/pirkiniai/registruoti"
          element={<Form state={{ state, setState }} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
