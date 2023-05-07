import linksModel from "../models/links.js";
const linksController = {

  getList: async (req, res) => {
    try {
      const links = await linksModel.find();
      // const filtred1=await linksModel.find()
      res.json(links);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  getById: async (req, res) => {
    try {
      const link = await linksModel.findById(req.params.id);
      res.json(link);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  post:async (req, res) => {
   const {name}=req.body;
   try{
const newLink=await linksModel.create({name});
res.json(newLink)
   }catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  update:async (req, res) => {
    const {id}=req.params;
    try{
 const updateLink=await linksModel.findByIdAndUpdate(id,req.body,{});
 res.json(updateLink)
    }catch (e) {
       res.status(400).json({ message: e.message });
     }
   },
  delete:async (req, res) => {
    const {id}=req.params;
    try{
 const deleted=await linksModel.findByIdAndDelete(id);
 res.json(deleted)
    }catch (e) {
       res.status(400).json({ message: e.message });
     }
   },
};
export default linksController;
