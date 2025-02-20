const router = require("express").Router();
const Career = require("../models/Career");
const User = require("../models/User");

router.post("/", async (req, res) => {
  const newCareer = new Career(req.body);
  try {
    const savedCareer = await newCareer.save();
    res.status(200).json(savedCareer);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);
    if (career.userId === req.body.userId) {
      await career.updateOne({ $set: req.body });
      res.status(200).json("The career course has been updated");
    } else {
      res.status(403).json("You can update only your career courses");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);
    if (career.userId === req.body.userId) {
      await career.deleteOne();
      res.status(200).json("The career course has been deleted");
    } else {
      res.status(403).json("You can delete only your career courses");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id/register", async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);
    if (!career.registeredUsers.includes(req.body.userId)) {
      await career.updateOne({ $push: { registeredUsers: req.body.userId } });
      res.status(200).json("You have registered for the course");
    } else {
      await career.updateOne({ $pull: { registeredUsers: req.body.userId } });
      res.status(200).json("You have unregistered from the course");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);
    res.status(200).json(career);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const careers = await Career.find();
    res.status(200).json(careers);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/category/:category", async (req, res) => {
  try {
    const careers = await Career.find({ category: req.params.category });
    res.status(200).json(careers);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
