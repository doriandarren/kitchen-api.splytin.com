import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const Schedule = sequelize.define('Schedule', {
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
  tableName: 'schedule',
  timestamps: true,
  paranoid: true
});


export default Schedule;
