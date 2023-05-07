import mongoose from "mongoose";

const uri="mongodb+srv://shira89516:s9339932@cluster0.q3oktzt.mongodb.net/TinyUrl";

const connectDB=async ()=>{
    await mongoose.connect(uri);
}
const database=mongoose.connection;

database.on('error',(error)=>{
    console.log('error');
})

database.once('connected',()=>{
    console.log('database connected');
})
// mongoose.set('toJson',{
//     virtuals:true,
//     transform:(doc,converted)=>{
//         delete converted._id;
//     }
// });

export default connectDB;