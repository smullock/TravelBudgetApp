const db = require('./connection');
const { User, Item } = require('../models');

db.once('open', async () => {


  await Item.deleteMany();

  await Item.create({
    date: '2023-05-08',
    city: 'New York',
    hotel: 'Marriott',
    details: 'Lorem ipsum dolor sit amet',
    flights: 500,
    accomodation: 1000,
    food: 500,
    activities: 1000,
  });

  console.log('item seeded');


  
  await User.create({
    username: 'mark',
    email: 'mark@testmail.com',
    password: 'password12345',

  });

  console.log('users seeded');

  process.exit();
});
