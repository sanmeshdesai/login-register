import User from '../models/User.js'
import { generateToken } from '../utils/generateToken.js';
import { comparePasssword, hashedPassword } from '../utils/hashPassword.js';


//register
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    //check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) 
        return res.status(400).json({message: "User already exists"});

    const user = await User.create({
        name,
        email,
        password: await hashedPassword(password),
        provider: "local"
    });

    res.status(201).json({
        token: generateToken(user._id),
        user
    });

};


//login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(!User) 
        return res.status(400).json({message: "Invalid Credentials"});

    const isMatch = await comparePasssword(password, user.password);

    if(!isMatch) 
        return res.status(400).json({message: "Invalid Credentials"});

    res.json({
        token: generateToken(user._id),
        user
    });
};