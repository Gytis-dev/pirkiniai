import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export const Home = ({ state }) => {
  const navigate = useNavigate();

  if (state.state.length) {
    return (
      <div style={{ width: "75%", margin: "100px auto" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  {" "}
                  <b>Pirkinys </b>
                </TableCell>
                <TableCell align="right">
                  <b>Pardavėjas</b>
                </TableCell>
                <TableCell align="right">
                  <b>Pirkimo data</b>
                </TableCell>
                <TableCell align="right">
                  <b>Garantija</b>
                </TableCell>
                <TableCell align="right">
                  <b>Aprašymas</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.state.map((row) => (
                <TableRow
                  key={Math.random()}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.pardavejas}</TableCell>
                  <TableCell align="right">{row.pirkimas}</TableCell>
                  <TableCell align="right">{row.garantija}</TableCell>
                  <TableCell align="right">{row.aprasymas}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  } else {
    return (
      <div style={{ width: "75%", margin: "100px auto", textAlign: "center" }}>
        <Typography variant={"h4"}>
          Jūs dar neregistravote nei vieno pirkinio
        </Typography>

        <div style={{ paddingTop: "20px" }}>
          <Button
            variant={"contained"}
            type="submit"
            onClick={() => navigate("/registruoti")}
          >
            Registruoti pirkinį
          </Button>
        </div>
      </div>
    );
  }
};
