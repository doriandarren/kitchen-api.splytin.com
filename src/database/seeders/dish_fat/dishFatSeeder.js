import { faker } from '@faker-js/faker';
import { DishFat } from '../../../models/DishFat.js';

export async function seedDishFats() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        fat_id: fake.lorem.word(),
        dish_id: fake.lorem.word(),
      });
    }

    await DishFat.bulkCreate(data);
    console.log('✅ Datos falsos insertados en dish_fats');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en dish_fats:', error);
  }
}    
