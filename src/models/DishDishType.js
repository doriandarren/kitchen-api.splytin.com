import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const DishDishType = sequelize.define('DishDishType', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  dish_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dish_type_id: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'dish_dish_type',
  timestamps: true,
  paranoid: true
});


export default DishDishType;
