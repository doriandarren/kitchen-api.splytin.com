import { faker } from '@faker-js/faker';
import { DishVegetable } from '../../../models/DishVegetable.js';

export async function seedDishVegetables() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        vegetable_id: fake.lorem.word(),
        dish_id: fake.lorem.word(),
      });
    }

    await DishVegetable.bulkCreate(data);
    console.log('✅ Datos falsos insertados en dish_vegetables');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en dish_vegetables:', error);
  }
}    
