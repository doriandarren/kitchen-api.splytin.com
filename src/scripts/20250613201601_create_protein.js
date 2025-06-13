import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/Protein.js';

async function createProteinTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla Protein sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla Protein:', error);
  } finally {
    await sequelize.close();
  }
}

createProteinTable();    
