import { faker } from '@faker-js/faker';
import { DishDishType } from '../../../models/DishDishType.js';

export async function seedDishDishTypes() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        dish_id: fake.lorem.word(),
        dish_type_id: fake.lorem.word(),
      });
    }

    await DishDishType.bulkCreate(data);
    console.log('✅ Datos falsos insertados en dish_dish_types');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en dish_dish_types:', error);
  }
}    
