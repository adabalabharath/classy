import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Divider,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloseIcon from "@mui/icons-material/Close";
import { removeBag } from "../backRedux/action";
const BagItems = ({ setTot }) => {
  const user = useSelector((store) => store.bagReducer?.user.user);
  const [total, setTotal] = useState(0);
  const initialCountItems =
    JSON.parse(localStorage.getItem("countItems")) ||
    new Array(user?.bag?.length).fill(1);
  const [count, setCount] = useState(initialCountItems);
  const [checkedItems, setCheckedItems] = useState(
    new Array(user?.bag?.length).fill(true)
  );
  const dispatch = useDispatch();
  const handleCheckboxChange = (index, e) => {
    // Create a copy of the checkedItems array and update the specific index
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
    let priceOnCount = user.bag[index].price * 10 * count[index];
    if (e.target.checked === false) {
      setTotal(total - priceOnCount);
    } else {
      setTotal(total + priceOnCount);
    }
  };

  const handleCount = (index, c) => {
    const updatedCount = [...count];

    updatedCount[index] = updatedCount[index] + c;
    if (updatedCount[index] !== 0) {
      setCount(updatedCount);
      const updatedPrices = user?.bag?.map(
        (item, index) => item.price * updatedCount[index] * 10
      );
      setTotal(updatedPrices.reduce((x, y) => x + y, 0));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeBag(name));
  };

  useEffect(() => {
    localStorage.setItem("countItems", JSON.stringify(count));
    setTotal(user.bag.reduce((a, b) => a + b.count * b.price * 10, 0));
  }, [count, user]);
  setTot(total);
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="button" color="success">
            Sub total : {`${"\u20B9"}`}
            {total}
          </Typography>
        </Grid>
        {total > 499 && (
          <Typography variant="subtitle2">
            congrats, you are eligible for free shipping
          </Typography>
        )}
      </Grid>
      {user?.bag?.map((x, index) => {
        return (
          <Card key={index} sx={{ m: 1, maxWidth: "300px", p: 1 }}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{ position: "relative" }}
              rowSpacing={1}
            >
              <Grid item>
                <Checkbox
                  sx={{ position: "absolute", top: 5, left: 0 }}
                  onChange={(e) => handleCheckboxChange(index, e)}
                  checked={checkedItems[index]}
                />
              </Grid>
              <Grid item>
                <Tooltip title="remove from cart">
                  <CloseIcon
                    sx={{ position: "absolute", right: 0, top: 10 }}
                    onClick={() => handleRemove(x.name)}
                  />
                </Tooltip>
              </Grid>

              <Grid item xs={3}>
                <CardMedia component={"img"} image={x?.imageURL} />
              </Grid>
              <Grid item xs={5}>
                <CardContent>
                  <Typography variant="subtitle2">{x?.name}</Typography>
                  <Typography variant="caption" color="success">
                    Price :{`${x.price * 10}` * `${count[index]}`}/-
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={4}>
                <ButtonGroup
                  size="small"
                  variant="contained"
                  sx={{ "& .MuiButton-root": { minWidth: 32, padding: "0px" } }}
                >
                  <Button onClick={() => handleCount(index, -1)}>
                    {count[index] == 1 ? (
                      <Tooltip title="Delete item">
                        <DeleteOutlineIcon
                          fontSize="small"
                          onClick={() => handleRemove(x.name)}
                        />
                      </Tooltip>
                    ) : (
                      "-"
                    )}
                  </Button>
                  <Button>{count[index]}</Button>
                  <Button onClick={() => handleCount(index, +1)}>+</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Card>
        );
      })}
    </>
  );
};

export default BagItems;
