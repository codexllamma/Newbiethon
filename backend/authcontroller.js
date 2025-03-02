const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('./User');


// Register User
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to register user" });
    }
};

// Login User (Session-Based)
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid email" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        // Store user ID in session
        req.session.userId = user._id;

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to login" });
    }
};

// Logout User (Destroy Session)
exports.logoutUser = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error deleting session:", err);
            return res.status(500).json({ error: "Failed to logout" });
        }
        res.status(200).json({ message: "User logged out successfully" });
    });
};
