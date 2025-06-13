import { faker } from '@faker-js/faker';
import { DishSchedule } from '../../../models/DishSchedule.js';

export async function seedDishSchedules() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        dish_id: fake.lorem.word(),
        schedule_id: fake.lorem.word(),
      });
    }

    await DishSchedule.bulkCreate(data);
    console.log('✅ Datos falsos insertados en dish_schedules');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en dish_schedules:', error);
  }
}    
