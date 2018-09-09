import ApolloClient, { gql } from 'apollo-boost';

const clientState = {
  defaults: {
    preferences: {
      __typename: 'Preferences',
      theme: 'standard',
      locale: 'en',
    },
  },
  resolvers: {
    Query: {
      preferences: (_, args, { cache }) => {
        const { preferences } = cache.readQuery({
          query: gql`
          query Preferences {
            preferences @client {
              standard
              locale
            }
          }`,
        });
        return preferences;
      },
    },
    Mutation: {
      changeLocale: (_, { locale }, { cache }) => {
        const data = {
          preferences: {
            __typename: 'Preferences',
            locale,
          },
        };

        cache.writeData({ data });
        return true;
      },
      changeThem: (_, { theme }, { cache }) => {
        const data = {
          preferences: {
            __typename: 'Preferences',
            theme,
          },
        };

        cache.writeData({ data });
        return true;
      },
    },
  },
  typeDefs: `
    type Preferences {
      theme: String
      locale: String
    }

    type Query {
      preferences: Preferences
    }

    type Mutation {
      changeLocale(locale: String!): String
      changeTheme(theme: String!): String
    }
  `,
};

const apolloClient = new ApolloClient({
  clientState,
});

export default apolloClient;
