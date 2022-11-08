import bcrypt from 'bcryptjs';
//Images
import aryaDtark from './images/burgers/arya-stark_1.jpg';
import tyrionLannister from './images/burgers/tyrion-lannister_1.jpg';
import daenerysTargaryen from './images/burgers/daenerys-targaryen_1.jpg';
import brienneOfTarth from './images/burgers/brienne-of-tarth_1.jpg';
import johnSnow from './images/burgers/john-snow_1.jpg';
import joffreyBaratheon from './images/burgers/joffrey-baratheon_1.jpg';
import khalDrogo from './images/burgers/khal-drogo_1.jpg';
import bericDondarrion from './images/burgers/beric-dondarrion_1.jpg';
import lady from './images/burgers/Lady_1.jpg';
import ghost from './images/burgers/Ghost_1.jpg';
import summer from './images/burgers/Summer_1.jpg';
import nymeria from './images/burgers/Nymeria_1.jpg';
import melisandre from './images/burgers/Melisandre_1.jpg';


const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      phone: '0926073422',
      password: bcrypt.hashSync ('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      phone:  '0905321351',
      password: bcrypt.hashSync ('123456'),
      isAdmin: false,
    },
    {
      name: 'Derek',
      email: 'derekcao0522@hotmail.com',
      phone:  '0935715719',
      password: bcrypt.hashSync ('1111'),
      isAdmin: true,
    },
  ],
  products: [
      {
        // _id: "1",
        name: "Arya Stark",
        image: aryaDtark,
        calorie: 864,
        category: "burgers", 
        price: 100,
        slug: "arya-stark",
        notice: "Pork",
        ingredients: "Pork, mushrooms, Swiss cheese, lettuce, tomato, red onion, pickle, ketchup and our Famous sauce.",
        countInStock: 1,
      },
      {
        // _id: "2",
        name: "Tyrion Lannister",
        image: tyrionLannister,
        calorie: 864, 
        category: "burgers",
        price: 110,
        slug: "tyrion-lannister",
        notice: "",
        ingredients: "ANGUS BEEF, California Avocado, salsa, American cheese, lettuce, tomato, red onion, pickle, ketchup and our Famous sauce.",
        countInStock: 17,
      },
      {
        // _id: "3",  
        name: "Daenerys Targaryen",
        image: daenerysTargaryen,
        calorie: 864, 
        category: "burgers",
        price: 120,
        slug: "daenerys-targaryen",
        notice:  "Spicy",
        ingredients: "Jalapeno, sriracha sauce, beef bacon, Swiss cheese, lettuce, tomato and our Famous sauce.",
        countInStock: 10,
      },
      {
        // _id: "4",
        name: "Brienne of Tarth",
        image: brienneOfTarth ,
        calorie: 864, 
        category: "burgers",
        price: 130,
        slug: "brienne-of-tarth",
        notice: "",
        ingredients: "Beef bacon, American cheese, lettuce, tomato, red onion, pickle, ketchup and our Famous sauce.",
        countInStock: 15,
      },
      {
        // _id: "5",
        name: "John Snow",
        image: johnSnow,
        calorie: 864, 
        category: "burgers",
        price: 140,
        slug: "john-snow",
        notice: "Vegetarian",
        ingredients: "Classic! American cheese, lettuce ,tomato, red onion, pickle, ketchup and our Famous sauce",
        countInStock: 13,
      },
      {
        // _id: "6",
        name: "Joffrey Baratheon",
        image: joffreyBaratheon ,
        calorie: 864,
        category: "burgers", 
        price: 150,
        slug: "joffrey-baratheon",
        notice: "Vegetarian",
        ingredients: "2/3lb patty stuffed with American cheese, topped with lettuce, tomato, red onion, pickle, ketchup, our Famous sauce.",
        countInStock: 7,
      },
      {
        // _id: "7",
        name: "Khal Drogo",
        image: khalDrogo,
        calorie: 864, 
        category: "burgers",
        price: 160,
        slug: "khal-drogo",
        notice: "Spicy",
        ingredients: "Jalapeno, hot sauce, habanero cheese, lettuce, tomato, red onion, pickle, ketchup and our Famous sauce.",
        countInStock: 16,
      },
      {
        // _id: "8",
        name: "Beric Dondarrion",
        image: bericDondarrion,
        calorie: 864, 
        category: "burgers",
        price: 170,
        slug: "beric-dondarrion",
        notice: "Pork",
        ingredients: "Becon, lettuce, tomato, red onion, pickle, ketchup and our Famous sauce",
        countInStock: 20,
      },
      { 
        // _id: "9",
        name: "Lady",
        image: lady,
        calorie: 300,
        category: "drinks", 
        price: 5,
        slug: "lady",
        notice: "Alcoholic",
        ingredients: "Gin, tonic water, 2 lime wheels.",
        countInStock: 16,
      },
      {
        // _id: "10",
        name: "Melisandre",
        image: melisandre,
        calorie: 300,
        category: "drinks", 
        price: 5,
        slug: "melisandre",
        notice: "Alcoholic",
        ingredients: "Bacardi superior, wray & nephew, teresa orange, pineapple juice, cranberry juice,lime juice, Zombie mix, Fire mix, garnish-half passionfruit and dry ice.",
        countInStock: 16,
      },
      {
        // _id: "11",
        name: "Summer",
        image: summer,
        calorie: 300,
        category: "drinks", 
        price: 6,
        slug: "summer",
        notice: "Peanut",
        ingredients: "Peanut, butter, banana, milk and dry ice.",
        countInStock: 16,
      },
      {
        // _id: "12",
        name: "Nymeria",
        image: nymeria,
        calorie: 300,
        category: "drinks", 
        price: 6,
        slug: "nymeria",
        notice: "",
        ingredients: "Banana, kiwi, strawberry, milk and dry ice.",
        countInStock: 16,
      }
    ]
};

export default data;