import { faker } from '@faker-js/faker';
import { Carbohydrate } from '../../../models/Carbohydrate.js';

export async function seedCarbohydrates() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        name: fake.lorem.word(),
      });
    }

    await Carbohydrate.bulkCreate(data);
    console.log('✅ Datos falsos insertados en carbohydrates');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en carbohydrates:', error);
  }
}    
