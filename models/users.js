// import mongoose from "mogoose";

// const usersSchema = mongoose.Schema({
//     id: {type:Number,
//       required:true},
//     name: {
//       type:String,
//       required:true,
//       default:"new user"
//     },
//     email: String,
//     password: String,
//     links: Array,
//   });
// export default mongoose.model("users",usersSchema);

import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    id:Number,
    name:String,
    email: String,
    password: String,
    links: Array,
  });
export default mongoose.model("users",usersSchema);