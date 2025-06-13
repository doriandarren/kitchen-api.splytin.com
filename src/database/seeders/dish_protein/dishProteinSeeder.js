import { faker } from '@faker-js/faker';
import { DishProtein } from '../../../models/DishProtein.js';

export async function seedDishProteins() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        protein_id: fake.lorem.word(),
        dish_id: fake.lorem.word(),
      });
    }

    await DishProtein.bulkCreate(data);
    console.log('✅ Datos falsos insertados en dish_proteins');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en dish_proteins:', error);
  }
}    
