import { faker } from '@faker-js/faker';
import { DishTypePreparation } from '../../../models/DishTypePreparation.js';

export async function seedDishTypePreparations() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        dish_id: fake.lorem.word(),
        type_preparation_id: fake.lorem.word(),
      });
    }

    await DishTypePreparation.bulkCreate(data);
    console.log('✅ Datos falsos insertados en dish_type_preparations');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en dish_type_preparations:', error);
  }
}    
