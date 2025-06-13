import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/DishCarbohydrate.js';

async function createDishCarbohydrateTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla DishCarbohydrate sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla DishCarbohydrate:', error);
  } finally {
    await sequelize.close();
  }
}

createDishCarbohydrateTable();    
