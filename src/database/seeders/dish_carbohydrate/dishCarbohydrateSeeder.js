import { faker } from '@faker-js/faker';
import { DishCarbohydrate } from '../../../models/DishCarbohydrate.js';

export async function seedDishCarbohydrates() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        carbohydrate_id: fake.lorem.word(),
        dish_id: fake.lorem.word(),
      });
    }

    await DishCarbohydrate.bulkCreate(data);
    console.log('✅ Datos falsos insertados en dish_carbohydrates');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en dish_carbohydrates:', error);
  }
}    
