const express = require("express");

const router = express.Router();

const {
  handelUsers,
  getUserbyId,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.js");

//rest api
router.get("/", handelUsers);

// router.get('/users' , async(req,res)=>{
//     const allusers= await usermodal.find({})
//     const html = `
//     <ul>
//    ${allusers.map((user)=> `<li>${user.first_name} + ${user.email}</li>`).join("")}
//     </ul>`

//     res.send(html)
// })

router.get("/:id", getUserbyId);

router.post("/", createUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
