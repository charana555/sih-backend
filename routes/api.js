const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const Plant = require("../models/plantData");

require("../db/config");

router.get("/", (req, res) => {
  res.send(`we are good to go`);
});

// crops screen
router.post("/crops", async (req, res) => {
  try {
    const { id, crops } = req.body;

    const user = new User({ id, crops });
    const saved = await user.save();
    if (saved) {
      console.log(`Data saved`);
      res.status(200).json({"message":"Data saved successfully"});
    } else {
      console.log(`not saved`);
      res.status(500).json({"message":"Data failed to save"});

    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/user", async (req, res) => {
  try {
    const { id, cropName, description, links } = req.body;
    const data = new Plant({ id, cropName, description, links });
    const saved = await data.save();
    if (saved) {
      console.log(`Data saved`);
    } else {
      console.log(`not saved`);
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

// django connection
// const spawn = require("child_process").spawn;
// const id = 123549845;
// const info = User.findOne({id:id})
//  const pythonProcess = spawn("python",['pp.py',JSON.toString(info)] );
// pythonProcess.stdout.on("data", (data) => {
//   myString = data.toString();
//   myJson = JSON.parse(myString);
//   console.log(myJson);
// });

module.exports = router;
