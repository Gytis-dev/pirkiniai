import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export const Menu = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
      <div>
        <Button variant={"text"} type="submit" onClick={() => navigate("/")}>
          Pirkiniai
        </Button>
      </div>

      <div>
        <Button
          variant={"text"}
          type="submit"
          onClick={() => navigate("/registruoti")}
        >
          Registruoti pirkinį
        </Button>
      </div>
    </div>
  );
};
