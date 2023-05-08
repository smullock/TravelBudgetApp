const { AuthenticationError } = require('apollo-server-express');
const { User, Item } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find({});
      return users;
    },
    user: async (parent, { username }) => {
      const user = await User.findOne({ username });
      return user;
    },
    items: async () => {
      const items = await Item.find({});
      return items;
    },
    item: async (parent, { _id }) => {
      const item = await Item.findById(_id);
      return item;
    },
  }, // <-- Add closing curly brace for Query object here

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // Create the user - Registration
      const user = await User.create({ username, email, password });
      // Assign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ email });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    addItem: async (parent, { date,city,hotel,details, flights,accomodation,food, activities }) => {
      console.log('Adding item to database:', Item);
      const item = await Item.create({date,city,hotel,details, flights,accomodation,food, activities });
      console.log('Added item to database:', item);
      return item;
    },
    
    deleteItem: async (parent, { id }) => {
      const item = await Item.findByIdAndDelete(id);
      return item;
    },
    updateItem: async (parent, { id, item }) => {
      const updatedItem = await Item.findByIdAndUpdate(id, item, { new: true });
      return updatedItem;
    },
  }, 
};

module.exports = resolvers;


  