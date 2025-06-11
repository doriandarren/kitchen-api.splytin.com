import { faker } from '@faker-js/faker';
import { Role } from '../../../models/Role.js';

export async function seedRoles() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        name: fake.lorem.word(),
        description: fake.lorem.word(),
      });
    }

    await Role.bulkCreate(data);
    console.log('✅ Datos falsos insertados en roles');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en roles:', error);
  }
}    
