const services = require('../services/userServices');

class userController {

    async getAllUsers(req, res) {
        try {
            const users = await services.getAllUsers();
            res.status(200).json(users);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getUserById(req, res) {
        try {

            const id = req.params.id;
            const user = await services.getUserById(id);
            if (!user.success) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json(user.data);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async createUser(req, res) {
        try {
            const userData = req.body;
            console.log('Creating user with data:', userData);
            const newUser = await services.createUser(userData);
            if (!newUser.success) {
                return res.status(400).json({ error: newUser.error.message });
            }
            res.status(201).json(newUser.data);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async updateUser(req, res) {
        try {
            const id = req.params.id;
            const userData = req.body;
            const updatedUser = await services.updateUser(id, userData);
            if (!updatedUser.success) {
                return res.status(404).json({ error: updatedUser.error.message });
            }
            res.status(200).json(updatedUser.data);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            const deletedUser = await services.deleteUser(id);
            if (!deletedUser.success) {
                return res.status(404).json({ error: deletedUser.error.message });
            }
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new userController();