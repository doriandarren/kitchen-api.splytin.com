import { faker } from '@faker-js/faker';
import { DishSeason } from '../../../models/DishSeason.js';

export async function seedDishSeasons() {
  try {
    const data = [];

    for (let i = 0; i < 10; i++) {
      const fake = faker;

      data.push({
        dish_id: fake.lorem.word(),
        season_id: fake.lorem.word(),
      });
    }

    await DishSeason.bulkCreate(data);
    console.log('✅ Datos falsos insertados en dish_seasons');
  } catch (error) {
    console.error('❌ Error al insertar datos falsos en dish_seasons:', error);
  }
}    
