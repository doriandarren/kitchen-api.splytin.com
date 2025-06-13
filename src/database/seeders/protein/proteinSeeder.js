import { faker } from '@faker-js/faker';
import { Protein } from '../../../models/Protein.js';

export async function seedProteins() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        name: fake.lorem.word(),
      });
    }

    await Protein.bulkCreate(data);
    console.log('✅ Datos falsos insertados en proteins');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en proteins:', error);
  }
}    
