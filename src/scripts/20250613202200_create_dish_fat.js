import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/DishFat.js';

async function createDishFatTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla DishFat sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla DishFat:', error);
  } finally {
    await sequelize.close();
  }
}

createDishFatTable();    
