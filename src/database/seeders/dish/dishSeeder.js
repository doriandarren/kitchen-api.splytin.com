import { faker } from '@faker-js/faker';
import { Dish } from '../../../models/Dish.js';

export async function seedDishes() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        name: fake.lorem.word(),
        description: fake.lorem.word(),
      });
    }

    await Dish.bulkCreate(data);
    console.log('✅ Datos falsos insertados en dishes');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en dishes:', error);
  }
}    
