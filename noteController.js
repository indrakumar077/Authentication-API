const noteModel = require('../models/noteModle')


const createNotes = async (req,res)=>{
   const {title, description} = req.body;

   const newNote =   new noteModel({
              
          title : title,
          description: description,
          userId: req.userId
   })
    
   try{
          await newNote.save();
          res.status(401).json(newNote)
   }
   catch(err){
          res.status(500).json({
            message : " newNote save ni ho raha"
          })
   }


}

const updateNotes = async (req,res)=>{

    const id = req.params.id;
    const {title, description} = req.body;

    const newNote = {
        title: title,
        description : description,
        userId : req.userId
    }

    try{
               await noteModel.findByIdAndUpdate(id,newNote,{new : true})
               res.status(200).json(newNote)
    }
    catch(err){
           res.status(404).json({
            message: "note update issue"
           })
    }
    
    
}

const deleteNotes = (req,res)=>{

    const id = req.params.id;
    
    try{
          const note  = noteModel.findByIdAndRemove(id);
          res.status(202).json(note)
    }
    catch(err){
        res.status(404).json({
            message: "note delete issue"
           })
    }
    
}

const getNotes = async (req,res)=>{
     
    try{
           const newNotes = await noteModel.find({
            userId:req.userId
           })

           res.status(200).json(newNotes)
    }
    catch(err){
        res.status(500).json({
            message : " newNote save ni ho raha"
          })
        }
}

module.exports ={createNotes,updateNotes,deleteNotes,getNotes}