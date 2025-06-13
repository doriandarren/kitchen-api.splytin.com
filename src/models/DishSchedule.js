import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const DishSchedule = sequelize.define('DishSchedule', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  dish_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  schedule_id: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'dish_schedule',
  timestamps: true,
  paranoid: true
});


export default DishSchedule;
