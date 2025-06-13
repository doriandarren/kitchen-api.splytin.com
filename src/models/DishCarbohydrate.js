import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const DishCarbohydrate = sequelize.define('DishCarbohydrate', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  carbohydrate_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dish_id: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'dish_carbohydrate',
  timestamps: true,
  paranoid: true
});


export default DishCarbohydrate;
