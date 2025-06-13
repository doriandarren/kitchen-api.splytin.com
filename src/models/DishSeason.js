import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const DishSeason = sequelize.define('DishSeason', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  dish_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  season_id: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'dish_season',
  timestamps: true,
  paranoid: true
});


export default DishSeason;
