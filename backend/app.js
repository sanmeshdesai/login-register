import express from 'express';
import cors from 'cors';
import authRoute from './routes/AuthRoute.js';


const app = express();

//middleware
app.use(cors());
app.use(express.json());


//routes
app.use('/api/auth', authRoute);

//check
app.get('/', (req,res) => {
    res.send("API is running")
});

export default app;
