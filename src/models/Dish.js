import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const Dish = sequelize.define('Dish', {
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
  tableName: 'dish',
  timestamps: true,
  paranoid: true
});


export default Dish;
