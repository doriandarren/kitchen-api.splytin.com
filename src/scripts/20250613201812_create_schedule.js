import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/Schedule.js';

async function createScheduleTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla Schedule sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla Schedule:', error);
  } finally {
    await sequelize.close();
  }
}

createScheduleTable();    
