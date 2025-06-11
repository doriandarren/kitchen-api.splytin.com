import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const Ability = sequelize.define('Ability', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  label: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ability_group_id: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'ability',
  timestamps: true,
  paranoid: true
});


export default Ability;
