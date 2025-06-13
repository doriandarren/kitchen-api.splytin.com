import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const Carbohydrate = sequelize.define('Carbohydrate', {
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
  tableName: 'carbohydrate',
  timestamps: true,
  paranoid: true
});


export default Carbohydrate;
