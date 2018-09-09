import { gql } from 'apollo-boost';

export default gql`
  query getPreferences {
    preferences @client {
      locale
      theme
    }
  }
`;
