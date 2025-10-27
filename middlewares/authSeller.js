import jwt from "jsonwebtoken"

const authSeller = async (req, res, next) => {
    const { sellerToken } = req.cookies;
    console.log(req.cookies)
    console.log("st:", sellerToken)
    if (!sellerToken) {
        return res.status(401).json({ success: false, message: "Not authorized: No token provided" });
    }

    try {
        const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET);

        if (tokenDecode.email === process.env.SELLER_EMAIL) {
            return next();
        } else {
            return res.status(403).json({ success: false, message: "Forbidden: Invalid seller credentials" });
        }
    } catch (error) {
        console.error("JWT Verification Error:", error);
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

export default authSeller;
