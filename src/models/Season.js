import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const Season = sequelize.define('Season', {
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
  tableName: 'season',
  timestamps: true,
  paranoid: true
});


export default Season;
