import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const DishType = sequelize.define('DishType', {
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
  tableName: 'dish_type',
  timestamps: true,
  paranoid: true
});


export default DishType;
