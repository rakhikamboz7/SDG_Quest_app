const jwt = require("jsonwebtoken");

function authenticateUser(req, res, next) {
    const authHeader = req.header('Authorization'); // Get the Authorization header

    // Check if the header is available
    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing" });
    }

    // Check if it starts with 'Bearer '
    if (!authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            message: "Invalid authorization format. Use 'Bearer <token>'"
        });
    }

    // Extract the token
    const token = authHeader.replace('Bearer ', '');

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token" }); // Invalid token
        }

        // Attach user data to request object. Adjust based on your actual token payload structure
        req.userId = user.userId; 
        req.user = user; 
        next(); 
    });
}

module.exports = { authenticateUser };



