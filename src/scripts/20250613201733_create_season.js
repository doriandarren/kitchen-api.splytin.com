import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/Season.js';

async function createSeasonTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla Season sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla Season:', error);
  } finally {
    await sequelize.close();
  }
}

createSeasonTable();    
