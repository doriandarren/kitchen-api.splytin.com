import { faker } from '@faker-js/faker';
import { User } from '../../../models/User.js';

export async function seedUsers() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        user_status_id: fake.lorem.word(),
        name: fake.lorem.word(),
        email: fake.lorem.word(),
        email_verified_at: fake.lorem.word(),
        password: fake.lorem.word(),
        image_url: fake.lorem.word(),
      });
    }

    await User.bulkCreate(data);
    console.log('✅ Datos falsos insertados en users');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en users:', error);
  }
}    
