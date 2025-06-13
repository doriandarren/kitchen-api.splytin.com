import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const Vegetable = sequelize.define('Vegetable', {
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
  tableName: 'vegetable',
  timestamps: true,
  paranoid: true
});


export default Vegetable;
