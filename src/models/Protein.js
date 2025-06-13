import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const Protein = sequelize.define('Protein', {
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
  tableName: 'protein',
  timestamps: true,
  paranoid: true
});


export default Protein;
