import Jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const decoded = Jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded) {
            res.status(401).json({ error: "Unauthorized" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
        
		req.user = user;

        next();
    } catch (error) {
        console.error(`Error in protectRoute Middleware: ${error.message}`);
        res.status(401).json({ error: "Unauthorized" });
    }
}

export default protectRoute;