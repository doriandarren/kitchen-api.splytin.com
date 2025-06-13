import sequelize from '../../database/settings/config.js';

/**********
 * Models
 **********/
import '../../models/DishVegetable.js';

async function createDishVegetableTable() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: false, alter: true });
    console.log('📦 Tabla DishVegetable sincronizada con éxito');
  } catch (error) {
    console.error('❌ Error al sincronizar la tabla DishVegetable:', error);
  } finally {
    await sequelize.close();
  }
}

createDishVegetableTable();    
