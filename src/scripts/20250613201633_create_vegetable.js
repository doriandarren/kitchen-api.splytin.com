import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/Vegetable.js';

async function createVegetableTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla Vegetable sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla Vegetable:', error);
  } finally {
    await sequelize.close();
  }
}

createVegetableTable();    
