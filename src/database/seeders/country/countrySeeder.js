import { faker } from '@faker-js/faker';
import { Country } from '../../../models/Country.js';

export async function seedCountries() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        common_name: fake.lorem.word(),
        iso_name: fake.lorem.word(),
        code_alpha_2: fake.lorem.word(),
        code_alpha_3: fake.lorem.word(),
        numerical_code: fake.lorem.word(),
        phone_code: fake.lorem.word(),
      });
    }

    await Country.bulkCreate(data);
    console.log('✅ Datos falsos insertados en countries');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en countries:', error);
  }
}    
