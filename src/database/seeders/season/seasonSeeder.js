import { faker } from '@faker-js/faker';
import { Season } from '../../../models/Season.js';

export async function seedSeasons() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        name: fake.lorem.word(),
      });
    }

    await Season.bulkCreate(data);
    console.log('✅ Datos falsos insertados en seasons');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en seasons:', error);
  }
}    
