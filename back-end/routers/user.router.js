const express = require("express");
const User = require("../entities/User");

const userRouter = express.Router();

//route get all contacts
//==>> http://localhost:8000/User/getall
userRouter.get("/getall", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.send("you have a problem");
  }
});

//route get all contacts
//==>> http://localhost:8000/User/getone
userRouter.get("/getone/:id", async (req, res) => {
  try {
    const user = await User.findOne(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.send("you have a problem");
  }
});

//post or add User
//==>> http://localhost:8000/User/addUser
userRouter.post("/addUser", async (req, res) => {
  try {
    const addUser = new User(req.body);
    await addUser.save();
    res.status(200).json({ msg: "User added successfully" });
  } catch (err) {
    console.log(err);
    res.send("you have a problem");
  }
});

//update User
//==>> http://localhost:8000/User/update/:id
userRouter.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateUser = await User.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).json({ msg: "User updated successfully" });
  } catch (err) {
    console.log(err);
    res.send("you have a problem");
  }
});

//delete User
//==>> http://localhost:8000/User/delete/:id
userRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "User deleted successfully" });
  } catch (err) {
    console.log(err);
    res.send("you have a problem");
  }
});

module.exports = userRouter;
