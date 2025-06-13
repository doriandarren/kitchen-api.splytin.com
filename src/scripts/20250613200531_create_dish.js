import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/Dish.js';

async function createDishTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla Dish sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla Dish:', error);
  } finally {
    await sequelize.close();
  }
}

createDishTable();    
