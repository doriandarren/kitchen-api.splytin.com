import { faker } from '@faker-js/faker';
import { DishType } from '../../../models/DishType.js';

export async function seedDishTypes() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        name: fake.lorem.word(),
      });
    }

    await DishType.bulkCreate(data);
    console.log('✅ Datos falsos insertados en dish_types');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en dish_types:', error);
  }
}    
