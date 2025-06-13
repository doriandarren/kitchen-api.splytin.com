import { faker } from '@faker-js/faker';
import { TypePreparation } from '../../../models/TypePreparation.js';

export async function seedTypePreparations() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        name: fake.lorem.word(),
      });
    }

    await TypePreparation.bulkCreate(data);
    console.log('✅ Datos falsos insertados en type_preparations');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en type_preparations:', error);
  }
}    
