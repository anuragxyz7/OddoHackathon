import User from './../modals/userModal.js'
import jwt from 'jsonwebtoken';

export const register = async (req,res)=>{
    try{
        // user registration
        const {name,email, password, profilepic, skillswant, skillesoff, profile, location, availability} = req.body;
        if(!name || !email || !password || !skillesoff || profile){
            return res.status(400).json({message: "All fields are required"});
        }
        const existinguser = await User.findOne({
            email,
        })
        if(existinguser){
            return res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        if(!hashedPassword){
            return res.status(500).json({message: "Error hashing password"});
        }
        // create new user
        const newuser = new User.create({
            name,
            email,
            password: hashedPassword,
            role: "user",
            profilePicture: profilepic || "",
            skillNeeded:skillswant || [],
            skillOffered:skillesoff,
            profile: profile || false,
            location: location || "",
            availability: availability || "",
        })
        await newuser.save();
        res.status(201).json({message: "User registered successfully", user: newuser});
    }catch(err){
        console.error("Error in register:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        
        if(!email || !password){
            return res.status(400).json({message: "Email and password are required"});
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ message: "Invalid email or password" });
        }

        // Check if JWT_SECRETKEY is defined
        if (!process.env.JWT_SECRETKEY) {
            return res.status(500).send({ message: "Server configuration error" });
        }

        const token = jwt.sign({ id: user._id, role:user.role }, process.env.JWT_SECRETKEY);
        res.status(200).send({
            message: `Login successful, Hi ${user.name} and ${user.role}`,
            user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            },
            success: true,
            token,
        });
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ message: "Internal server error" , error: error.message });
    }
}