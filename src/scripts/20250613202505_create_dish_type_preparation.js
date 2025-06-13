import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/DishTypePreparation.js';

async function createDishTypePreparationTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla DishTypePreparation sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla DishTypePreparation:', error);
  } finally {
    await sequelize.close();
  }
}

createDishTypePreparationTable();    
