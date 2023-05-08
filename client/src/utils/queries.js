import { gql } from "@apollo/client";

export const GET_ITEMS = gql`
  query getItems {
    items {
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
`;
