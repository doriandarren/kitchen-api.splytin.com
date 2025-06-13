import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const DishFat = sequelize.define('DishFat', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  fat_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dish_id: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'dish_fat',
  timestamps: true,
  paranoid: true
});


export default DishFat;
