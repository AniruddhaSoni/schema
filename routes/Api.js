const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const Yojna = require("../models/Yojna");

router.use(bodyParser.json());

router.get("/allyojna", async (req, res) => {
  try {
    const yojnas = await Yojna.find();
    res.send(yojnas);
  } catch (error) {
    res.json({ messaege: error });
  }
});

router.post("/addyojna", async (req, res) => {
  // console.log(req.body);

  const yojna = new Yojna({
    title: req.body.title,
    category: req.body.category,
    body: req.body.body,
    link: req.body.link,
  });

  const savedYojna = await yojna.save();
  try {
    res.json(savedYojna);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
