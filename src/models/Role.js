import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'role',
  timestamps: true,
  paranoid: true
});


export default Role;
