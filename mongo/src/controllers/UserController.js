const User =require("../model/UserModel")
const getUsers=async(req,res)=>{
    try {
        const users = await User.find();  // Use the User model to fetch data
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getUser=async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }


}

const createUser= async (req, res) => {
    try {
        const users = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });  // Use the User model to fetch data
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const updateUsers=async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteUser=async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
getUsers, 
getUser,
 createUser, 
 updateUsers, 
 deleteUser
}

