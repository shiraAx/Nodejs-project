// import mongoose from "mongoose";

// const linksSchema = mongoose.Schema({
//     id: {type:Number,
//       required:true},
//       originalUrl: {
//       type:String,
//       required:true,
//       default:"new originalUrl"
//     },
//     clics:[
//       {
//         id:Number,
//         insertedAt:new Date(),
//         ipAddress:"0.0.0.0"
//       }
//     ]
//   });
// export default mongoose.model("links",linksSchema);

import mongoose from "mongoose";

const linksSchema = mongoose.Schema({
  id: Number,
  originalUrl: String,
  clicks: [
    {
      id: Number,
      insertedAt: Date,
      ipAddress: String,
      targetParamValue:String
    }
  ],
  targetParamName:String,
  targetValues:[
    {
      id:Number,
      name:String,
      value:String
    }
  ]
});
export default mongoose.model("links", linksSchema);