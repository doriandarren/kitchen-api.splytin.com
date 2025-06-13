import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/DishDishType.js';

async function createDishDishTypeTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla DishDishType sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla DishDishType:', error);
  } finally {
    await sequelize.close();
  }
}

createDishDishTypeTable();    
