import { gql } from '@apollo/client';

export const ADD_ITEM = gql`
mutation addItem(
  $date:String!
  $city: String!
  $hotel: String!
  $details: String
  $flights: Float
  $accomodation: Float
  $food: Float
  $activities: Float
) {
  addItem(
    date: $date
    city: $city
    hotel: $hotel
    details: $details
    flights: $flights
    accomodation: $accomodation
    food: $food
    activities: $activities
  ) {
    item {
      _id
      date
      city
      hotel
      details
      flights
      accomodation
      food
      activities
    }
  }
}
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;



