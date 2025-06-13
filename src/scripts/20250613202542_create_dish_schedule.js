import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/DishSchedule.js';

async function createDishScheduleTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla DishSchedule sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla DishSchedule:', error);
  } finally {
    await sequelize.close();
  }
}

createDishScheduleTable();    
