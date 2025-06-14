import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const UserStatus = sequelize.define('UserStatus', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'user_status',
  timestamps: true,
  paranoid: true
});


export default UserStatus;
