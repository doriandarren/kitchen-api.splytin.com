import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const DishTypePreparation = sequelize.define('DishTypePreparation', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  dish_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type_preparation_id: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'dish_type_preparation',
  timestamps: true,
  paranoid: true
});


export default DishTypePreparation;
