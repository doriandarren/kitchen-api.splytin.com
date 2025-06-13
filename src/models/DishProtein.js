import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const DishProtein = sequelize.define('DishProtein', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  protein_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dish_id: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'dish_protein',
  timestamps: true,
  paranoid: true
});


export default DishProtein;
