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
        //const users = await User.find(); --> Mongoose version

    }

    async getUserById(id) {
        try {
            const user = await User.findByPk(id);
            //const user = await User.findById(id); --> Mongoose version
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
            // const newUser = new User(userData);
            // await newUser.save();
            return { success: true, data: newUser };
        } catch (error) {
            return { success: false, error: error };
        }
    }
    async updateUser(id, userData) {
        try {
            const user = await User.findByPk(id);
            //const user = await User.findByIdAndUpdate(id, userData, { new: true, runValidators: true });

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
            //const user = await User.findByIdAndDelete(id);

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