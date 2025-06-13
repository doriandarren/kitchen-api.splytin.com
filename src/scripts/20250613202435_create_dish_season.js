import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/DishSeason.js';

async function createDishSeasonTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla DishSeason sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla DishSeason:', error);
  } finally {
    await sequelize.close();
  }
}

createDishSeasonTable();    
