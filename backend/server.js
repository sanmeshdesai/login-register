import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());


// test
app.get('/', (req, res) => {
    res.send("API is running");
});


//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
    
})