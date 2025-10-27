import userModel from "../models/User.js";

//update user cart data

export const updateCart = async (req, res) => {
    try {
        const { userId, cartItems } = req.body;

        await userModel.findByIdAndUpdate(userId, {cartItems})
            res.json({ success : true, message : "Cart Updated"})  
    } catch (error) {
         console.log(error.message);
        res.json({ success : false, message : error.message })  
    }
}