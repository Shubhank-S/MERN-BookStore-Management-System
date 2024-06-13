import JWT from "jsonwebtoken";

const verifyAdmin = (req, resp, next) => {
    const token = req.cookies.token;
    if (!token) {
        return resp.json({ success: false, message: "Invalid Admin" }).status(405)
    } else {
        JWT.verify(token, process.env.JWT_ADMIN_KEY, (error, decoded) => {
            if (error) {
                return resp.json({ success: false, message: "Invalid Token" }).status(401)
            } else {
                req.username = decoded.username;
                req.role = decoded.role;
                next();
            }
        })
    }
}

export default verifyAdmin;