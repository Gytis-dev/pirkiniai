import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "./pages/Form/Form";
import { Home } from "./pages/Home/Home";
import { Menu } from "./components/Menu";
import { useState } from "react";

export const App = () => {
  const [state, setState] = useState([]);

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home state={{ state, setState }} />} />
        <Route
          path="/registruoti"
          element={<Form state={{ state, setState }} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
