import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const TypePreparation = sequelize.define('TypePreparation', {
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
  tableName: 'type_preparation',
  timestamps: true,
  paranoid: true
});


export default TypePreparation;
