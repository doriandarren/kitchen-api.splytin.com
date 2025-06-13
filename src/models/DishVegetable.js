import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const DishVegetable = sequelize.define('DishVegetable', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  vegetable_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dish_id: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'dish_vegetable',
  timestamps: true,
  paranoid: true
});


export default DishVegetable;
