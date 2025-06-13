import { faker } from '@faker-js/faker';
import { Schedule } from '../../../models/Schedule.js';

export async function seedSchedules() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        name: fake.lorem.word(),
      });
    }

    await Schedule.bulkCreate(data);
    console.log('✅ Datos falsos insertados en schedules');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en schedules:', error);
  }
}    
