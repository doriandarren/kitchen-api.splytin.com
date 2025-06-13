import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const Fat = sequelize.define('Fat', {
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
  tableName: 'fat',
  timestamps: true,
  paranoid: true
});


export default Fat;
