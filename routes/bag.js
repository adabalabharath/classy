const express = require("express");
const auth = require("../middlewares/authenticateToken");
const bagRouter = express.Router();

bagRouter.post("/addbag", auth, async (req, res) => {
  try {
    let loggedUser = req.user;
    let existingItem = loggedUser.bag.find((x) => x.name === req.body.name);
    if (existingItem) {
      existingItem.count = existingItem.count + 1;
    } else {
      loggedUser.bag.push(req.body);
    }
    await loggedUser.save();
    res.send({ status: "added to bag", user: loggedUser });
  } catch (error) {
    res.status(401).send(error.message);
  }
});

bagRouter.patch("/:call/:case/:count?", auth, async (req, res) => {
  try {
    const name = req.params.case;
    const user = req.user;
    const count = req.params.count;
    const validCalls = ["remove", "count"];

    // Validate the "call" parameter
    if (!validCalls.includes(req.params.call)) {
      throw new Error("Not a valid call");
    }

    // Find the product in the user's bag
    const caseValidation = user.bag.find((x) => x.name === name);
    if (!caseValidation) {
      throw new Error("No product found");
    }

    // If the call is "remove", remove the item from the bag
    if (req.params.call === "remove" && !count) {
      user.bag = user.bag.filter((x) => x.name !== name);
    } else if (req.params.call === "count") {
      // If the call is "count", update the item's count
      if (!count) {
        throw new Error("Invalid count provided");
      }

      user.bag = user.bag.map((item) => {
        if (item.name === name) {
          item.count = count; // Update the count for the specific item
          return item;
        }
        return item; // Return other items unchanged
      });
    }

    if (req.params.call === "remove" && count) {
      throw new Error("check url again");
    }

    // Save the updated user object
    await user.save();

    res.send({ status: "Updated item successfully", user });
  } catch (error) {
    res.status(400).send({ status: error.message });
  }
});

module.exports = bagRouter;
