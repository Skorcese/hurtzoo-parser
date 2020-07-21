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
  await Discount.create({
    service: 'hurtzoo',
    producer: 'BALBI',
    discount_range_max: 20,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Barry King',
    discount_range_max: 16,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Bazyl',
    discount_range_max: 25,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Beaphar',
    discount_range_max: 13,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Benek',
    discount_range_max: 24,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Biały Kieł',
    discount_range_max: 22,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Bosch',
    discount_range_max: 25,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Brit Animals',
    discount_range_max: 2,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Brit Care',
    discount_range_max: 18,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Brit Fresh',
    discount_range_max: 0,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: `Brit Let's Bite`,
    discount_range_max: 18,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Brit Premium',
    discount_range_max: 18,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: `Butcher's`,
    discount_range_max: 27,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Canagan',
    discount_range_max: 10,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Carnilove',
    discount_range_max: 2,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: `Cat's best`,
    discount_range_max: 18,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Chaba',
    discount_range_max: 20,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Class poidła',
    discount_range_max: 15,
  });
  await Discount.create({
    service: 'hurtzoo',
    producer: 'Comfy',
    discount_range_max: 14,
  });
};
