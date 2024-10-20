import {
  Alert,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Note from "./Note";
import EmptyData from "./EmptyData";
import { addToBag } from "../backRedux/action";
import { context } from "../context/ContextProvider";

const Cases = () => {
  const data = useSelector((store) => store.reducer.data);
  const user = useSelector((store) => store.bagReducer?.user);
  const error = useSelector((store) => store.bagReducer?.error);
  const { openSnackbar, setOpenSnackbar } = useContext(context);
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar message
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Severity of the snackbar
  const [mode, setMode] = useState([]);
    const [actionTriggered, setActionTriggered] = useState(false); // Flag to track if add action was triggered
  const params = useParams();
  const type = params.type.split("-").join("_").toLowerCase();
  const brand = params.brand;
  const modal = params.case.split("-")[0].split("_").join(" ");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const addBag = (item) => {
    if (user?.user) {
      dispatch(addToBag(item));
      setActionTriggered(true); // Action was triggered
    } else {
      nav("/account");
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false); // Close the snackbar
    setActionTriggered(false); // Reset the action flag
  };

  useEffect(() => {
    let branded = data.filter((x) => x.brand === brand);
    if (branded.length > 0) {
      setMode(branded[0][type]);
    }
  }, [brand]);

  useEffect(() => {
    // Only trigger the Snackbar if an add to bag action was performed
    if (actionTriggered) {
      if (error) {
        setOpenSnackbar(true);
        setSnackbarMessage("Couldn't add to bag, something went wrong.");
        setSnackbarSeverity("error");
      } else {
        setOpenSnackbar(true);
        setSnackbarMessage("Added to bag successfully.");
        setSnackbarSeverity("success");
      }
    }
  }, [user, error, actionTriggered])
  if (!data) {
    return <EmptyData />;
  }

  return (
    <>
      <Note />

      <Grid container m={1} justifyContent={"center"}>
        {mode.map((x, index) => (
          <Grid item sx={{ m: 2 }} xs={2} key={index}>
            <Card>
              <Grid
                container
                key={index}
                direction="column"
                justifyContent="center"
                alignItems={"center"}
                spacing={2}
                p={1}
              >
                <Grid item>
                  <Link
                    to={`/${type}/${brand}/${modal.split(" ").join("")}/${
                      x.name
                    }`}
                  >
                    <CardMedia
                      component={"img"}
                      image={x.imageURL}
                      sx={{ height: "50%" }}
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction={"column"}
                    alignItems={"center"}
                    spacing={1}
                  >
                    <Grid item>
                      <Typography variant="button">{x.name}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="buttontext" color="success">
                        {`${"\u20B9"}${x?.price * 10}`}.00
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">
                        Model Type: {modal}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => addBag(x)}
                  >
                    Add to Bag
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Snackbar Component */}
      {
        <Snackbar
          open={openSnackbar}
          onClose={handleSnackbarClose}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      }
    </>
  );
};

export default Cases;
