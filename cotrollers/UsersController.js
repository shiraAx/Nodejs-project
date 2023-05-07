// const usersController = {
//     getList: (req, res) => {
//       console.log(req.query.status);
//       res.send([
//         {
//             id: 1,
//             name: "aaa",
//             email: "aaa",
//             password: "111",
//             links: [],
//           },
//           {
//             id: 2,
//             name: "nnnn",
//             email: "nnnn",
//             password: ",mj,",
//             links: [],
//           },
//       ]);
//     },
//     getById: (req, res) => {
//       res.send(`get user by id ${req.params.id}`);
//     },
//     post: (req, res) => {
//       res.send("add a new user");
//     },
//     update:(req, res) => {
//       res.send("update a user");
//     },
//     delete:(req, res) => {
//       res.send("delete a user");
//     },
//   };
//   export default usersController;
  

import usersModel from "../models/users.js"
const usersController = {

  getList: async (req, res) => {
    try {
      const users = await usersModel.find();
      res.json(users);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  getById: async (req, res) => {
    try {
      const user = await usersModel.findById(req.params.id);
      res.json(user);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  post:async (req, res) => {
   const {name}=req.body;
   try{
const newUser=await usersModel.create({name});
res.json(newUser)
   }catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  update:async (req, res) => {
    const {id}=req.params;
    try{
 const updateUser=await usersModel.findByIdAndUpdate(id,req.body,{});
 res.json(updateUser)
    }catch (e) {
       res.status(400).json({ message: e.message });
     }
   },
  delete:async (req, res) => {
    const {id}=req.params;
    try{
 const deleted=await usersModel.findByIdAndDelete(id);
 res.json(deleted)
    }catch (e) {
       res.status(400).json({ message: e.message });
     }
   },
};
export default usersController;
