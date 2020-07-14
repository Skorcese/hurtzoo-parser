import { Discount } from '@bushidogames/db';
export const saveInitialDiscounts = async () => {
  await Discount.create({
    service: 'hurtzoo',
    producer: '8in1',
    discount_range_max: 18,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Abart',
    discount_range_max: 27,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Abazoo',
    discount_range_max: 25,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Adbi',
    discount_range_max: 15,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Almo Nature',
    discount_range_max: 14,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Animal Lovers',
    discount_range_max: 17,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Animonda',
    discount_range_max: 15,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Applaws',
    discount_range_max: 17,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Aqua El',
    discount_range_max: 14,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Aqua Nova',
    discount_range_max: 18,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Arion',
    discount_range_max: 14,
  });
};
