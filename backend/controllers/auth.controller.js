import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match"
            });
        }

        const user = await User.findOne({ username })
        if (user) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/body?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();
            res.status(200).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                gender: newUser.gender,
                profilePic: newUser.profilePic
            });
        }
        else {
            res.status(400).json({
                message: "Invalid data",
            });
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
        console.log(error);
    }
}


export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                message: "User does not exist"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "password is incorrect"
            });
        }

        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            gender: user.gender,
            profilePic: user.profilePic
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
}


export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({
            message: "Logged out"
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
}