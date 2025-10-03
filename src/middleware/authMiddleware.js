const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token, access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretkey");
    req.admin = decoded; // admin info
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is invalid" });
  }
};

module.exports = verifyAdmin;
