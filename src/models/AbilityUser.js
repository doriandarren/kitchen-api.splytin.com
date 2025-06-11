import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const AbilityUser = sequelize.define('AbilityUser', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ability_id: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'ability_user',
  timestamps: true,
  paranoid: true
});


export default AbilityUser;
