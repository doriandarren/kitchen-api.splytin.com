import { faker } from '@faker-js/faker';
import { Vegetable } from '../../../models/Vegetable.js';

export async function seedVegetables() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        name: fake.lorem.word(),
      });
    }

    await Vegetable.bulkCreate(data);
    console.log('✅ Datos falsos insertados en vegetables');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en vegetables:', error);
  }
}    
