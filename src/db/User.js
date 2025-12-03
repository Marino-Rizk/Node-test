const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
//   email: {
//     type: DataTypes.STRING(100),
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: true,
//     },
//   },
}, {
  tableName: 'users',
  timestamps: true,
});

module.exports = User;

/////////////////////////////////////////////////

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       minlength: 2,
//       maxlength: 100,
//     },
//        // email: {
//     //   type: String,
//     //   required: true,
//     //   unique: true,
//     // },
//   },
//   {
//     timestamps: true,
//       }
// );

// module.exports = mongoose.model('User', userSchema);