import User from "../models/users.js";
import Feedback from "../models/Feedback.js";

// GET all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password"); // Don't send password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE user by ID
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("PUT /users called with ID:", id);

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE user by ID
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully", user: deletedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const submitFeedback = async (req, res) => {
  try {
    const { message } = req.body;

    // Get user ID from token
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    );
    const userId = decoded.id;

    // Get user details
    const user = await User.findById(userId);

    const feedback = await Feedback.create({
      userId,
      message,
      userEmail: user.email,
      userName: user.childname,
    });

    res.status(201).json({ message: "Feedback submitted", feedback });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
