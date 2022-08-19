const express  = require('express');
const noteRout = require('./routes/noteRoute');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const { json } = require('body-parser');
const auth = require('./Middleware/auth');
const cors = require('cors')
const dotenv = require('dotenv')
const dbURL ='mongodb+srv://indra16:9826391787@cluster0.3vigtan.mongodb.net/?retryWrites=true&w=majority';
const app= express();

app.use(cors());

app.use(json());
dotenv.config();



app.use("/user",userRoutes);
app.use("/notes",noteRout);



const PORT = process.env.PORT || 5000;


 mongoose.connect(dbURL).then(()=>{
    
    // after connection start the app
        app.listen(PORT,()=>{
            console.log('lisen'+" "+PORT);
          
            
        });

 })
 .catch((error) => {
    console.log(error);
 })




