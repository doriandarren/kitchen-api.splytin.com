import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/DishProtein.js';

async function createDishProteinTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla DishProtein sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla DishProtein:', error);
  } finally {
    await sequelize.close();
  }
}

createDishProteinTable();    
