const User = require('../db/User');
const sequelize = require('../db/connection');

class userService {

    async getAllUsers() {

        try {
            const query = "SELECT * FROM users";
            const users = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
            return users;
        } catch (error) {
            throw new Error(`Error fetching users: ${error.message}`);
        }

        //return await User.findAll();
    }

    async getUserById(id) {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('User not found');
            }
            return { success: true, data: user };
        }
        catch (error) {
            return { success: false, error: error };
        }
    }

    async createUser(userData) {
        try {
            const newUser = await User.create(userData);
            return { success: true, data: newUser };
        } catch (error) {
            return { success: false, error: error };
        }
    }
    async updateUser(id, userData) {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('User not found');
            }
            await user.update(userData);
            return { success: true, data: user };
        } catch (error) {
            return { success: false, error: error };
        }
    }
    async deleteUser(id) {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('User not found');
            }
            await user.destroy();
            return { success: true };
        } catch (error) {
            return { success: false, error: error };
        }
    }
}
module.exports = new userService();