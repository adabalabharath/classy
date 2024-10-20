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
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloseIcon from "@mui/icons-material/Close";
import { removeBag } from "../backRedux/action";
import EmptyBag from "./EmptyBag";
import { context } from "../context/ContextProvider";
const BagItems = ({ setTot }) => {
  const user = useSelector((store) => store.bagReducer?.user.user);
  const [total, setTotal] = useState(0);
  const {setOpenSnackbar}=useContext(context)
  setOpenSnackbar(false)
  const [checkedItems, setCheckedItems] = useState(
    new Array(user?.bag?.length).fill(true)
  );
  const dispatch = useDispatch();

  const handleCheckboxChange = (index, e) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
    let priceOnCount = user.bag[index].price * 10 * user.bag[index].count;
    if (!e.target.checked) {
      setTotal((prev) => {
        const newTotal = prev - priceOnCount;
        setTot(newTotal); // Pass updated total to the parent
        return newTotal;
      });
    } else {
      setTotal((prev) => {
        const newTotal = prev + priceOnCount;
        setTot(newTotal); // Pass updated total to the parent
        return newTotal;
      });
    }
  };

  const handleCount = (index, c) => {
    let cInc = user.bag[index].count + c;
    if (cInc !== 0) {
      dispatch(removeBag(user.bag[index].name, "count", cInc));
    }
    const priceDifference = c * user.bag[index].price * 10;
    if (checkedItems[index]) {
      setTotal((prevTotal) => prevTotal + priceDifference);
      setTot((prevTotal) => prevTotal + priceDifference);
    }
  };

  const handleRemove = (name) => {
    dispatch(removeBag(name, "remove"));
  };

  useEffect(() => {
    // Calculate total for only the checked items
    const initialTotal = user?.bag.reduce((acc, item, index) => {
      if (checkedItems[index]) {
        return acc + item.price * 10 * item.count;
      }
      return acc;
    }, 0);
    setTotal(initialTotal);
    setTot(initialTotal); // Set initial total in parent
    
  }, [user?.bag, checkedItems, setTot]);

  if(!user){
    return <EmptyBag/>
  }

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
                    Price :{`${x.price * 10}` * `${x.count}`}/-
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={4}>
                <ButtonGroup
                  size="small"
                  variant="contained"
                  sx={{ "& .MuiButton-root": { minWidth: 32, padding: "0px" } }}
                  disabled={checkedItems[index] === false}
                >
                  <Button onClick={() => handleCount(index, -1)}>
                    {x.count == 1 ? (
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
                  <Button>{x.count}</Button>
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
