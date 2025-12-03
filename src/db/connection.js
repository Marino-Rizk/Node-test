const { Sequelize } = require('sequelize');
//require("dotenv").config();

const sequelize = new Sequelize(
  'nodetest',// || process.env.DB_NAME
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;

// require('dotenv').config();
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/nodetest';
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected successfully');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;