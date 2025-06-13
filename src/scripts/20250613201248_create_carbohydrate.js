import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/Carbohydrate.js';

async function createCarbohydrateTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla Carbohydrate sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla Carbohydrate:', error);
  } finally {
    await sequelize.close();
  }
}

createCarbohydrateTable();    
