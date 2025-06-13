import { faker } from '@faker-js/faker';
import { Fat } from '../../../models/Fat.js';

export async function seedFats() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        name: fake.lorem.word(),
      });
    }

    await Fat.bulkCreate(data);
    console.log('✅ Datos falsos insertados en fats');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en fats:', error);
  }
}    
