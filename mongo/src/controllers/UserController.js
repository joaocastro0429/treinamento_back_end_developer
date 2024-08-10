const userService=require("../services/UserService")
const getUsers=async(req,res)=>{
    try {
        const users = await userService.getUsers();  // Use the User model to fetch data
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getUser=async (req, res) => {
    try {
        const user = await userService.getUser(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }


}

const createUser= async (req, res) => {
    try {
        const users = await userService.createUser(req.body);  // Use the User model to fetch data
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const updateUsers=async (req, res) => {
    try {
        const user = await userService.updateUsers(req.params.id, req.body);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteUser=async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);
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

