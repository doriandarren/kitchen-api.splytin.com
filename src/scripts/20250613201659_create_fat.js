import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/Fat.js';

async function createFatTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla Fat sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla Fat:', error);
  } finally {
    await sequelize.close();
  }
}

createFatTable();    
