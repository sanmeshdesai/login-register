import dotenv from 'dotenv'
import connectDB from './config/db.js'
import app from "./app.js"

dotenv.config();

//database
connectDB()


//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
    
})