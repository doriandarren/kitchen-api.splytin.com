import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/TypePreparation.js';

async function createTypePreparationTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla TypePreparation sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla TypePreparation:', error);
  } finally {
    await sequelize.close();
  }
}

createTypePreparationTable();    
