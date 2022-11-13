import { TextField, Typography, Button } from "@mui/material";

import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";

import { useNavigate } from "react-router";
import { useState } from "react";

export const Form = ({ state }) => {
  const navigate = useNavigate();

  const [pirkinys, setPirkinys] = useState(false);
  const [pardavejas, setPardavejas] = useState(false);
  const [aprasymas, setAprasymas] = useState(false);

  const [open, setOpen] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    setPirkinys(false);
    setPardavejas(false);
    setAprasymas(false);

    const pirkinys = e.target["pirkinys"].value;
    const pardavejas = e.target["pardavejas"].value;
    const pirkimas = e.target["pirkimas"].value;
    const garantija = e.target["garantija"].value;
    const aprasymas = e.target["aprasymas"].value;

    if (!pirkinys) {
      setOpen(true);
      setPirkinys(true);
    }
    if (!pardavejas) {
      setOpen(true);
      setPardavejas(true);
    }
    if (!aprasymas) {
      setOpen(true);
      setAprasymas(true);
    } else {
      state.setState([
        ...state.state,
        { name: pirkinys, pardavejas, pirkimas, garantija, aprasymas },
      ]);

      setOpen(false);

      navigate("/");
    }
  };

  return (
    <div style={{ margin: "100px auto", width: "50%" }}>
      <Typography variant="h4">Naujas pirkinys</Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "20px",
        }}
        onSubmit={submit}
      >
        <div>
          <TextField
            name="Pirkinio pavadinimas"
            id="pirkinys"
            label="Pirkinys"
            variant="standard"
            fullWidth
            error={pirkinys}
          />
        </div>
        <div>
          <TextField
            id="pardavejas"
            label="Pardavėjas"
            fullWidth
            variant="standard"
            error={pardavejas}
          />
        </div>

        <div>
          <TextField
            id="pirkimas"
            label="Pirkimo data"
            type="date"
            fullWidth
            defaultValue="2022-11-13"
            variant="standard"
          />
        </div>

        <div>
          <TextField
            id="garantija"
            label="Garantinio aptarnavimo terminas"
            type="date"
            defaultValue="2022-11-13"
            fullWidth
            variant="standard"
          />
        </div>

        <div>
          <TextField
            id="aprasymas"
            label="Pirkinio aprašymas"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            minRows={4}
            error={aprasymas}
          />
        </div>

        <div>
          <Button variant={"outlined"} fullWidth type="submit">
            Registruoti pirkinį
          </Button>
        </div>
      </form>

      <div style={{ marginTop: "30px" }}>
        <Collapse in={open}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              ></IconButton>
            }
          >
            Prašome taisyklingai užpildyti formą
          </Alert>
        </Collapse>
      </div>
    </div>
  );
};
