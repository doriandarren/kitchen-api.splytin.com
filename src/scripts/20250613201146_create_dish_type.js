import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/DishType.js';

async function createDishTypeTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla DishType sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla DishType:', error);
  } finally {
    await sequelize.close();
  }
}

createDishTypeTable();    
