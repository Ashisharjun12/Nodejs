const usermodal = require("../models/user.js");

const handelUsers = async (req, res) => {
  const allusers = await usermodal.find({});
  return res.json(allusers);
};

const getUserbyId = async (req, res) => {
  const id = req.params.id;
  const user = await usermodal.findById(id);
  return res.json(user);
};

const createUser = async (req, res) => {
  const { first_name, last_name, gender, email, job_title } = req.body;
  if (!first_name || !last_name || !gender || !email || !job_title) {
    return res.status(400).json({ msg: "please fill the details" });
  }

  const result = await usermodal.create({
    first_name,
    last_name,
    gender,
    email,
    job_title,
  });

  return res
    .status(201)
    .json({ msg: " user created succesfully!!", id: result._id });
};

const updateUser = async (req,res)=>{
    const id = req.params.id
    await users.findByIdAndUpdate(id , {first_name:"hello"})
    return res.json({status : "success"})
}


const deleteUser = async (req,res)=>{
    await users.findByIdAndDelete(id)
    return res.json({status : "pending"})
}

module.exports = {
  handelUsers,
  getUserbyId,
  createUser,
  updateUser,
  deleteUser
};
