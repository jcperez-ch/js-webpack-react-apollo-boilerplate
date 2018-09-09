import React, { Component } from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { ThemeProvider } from 'emotion-theming';
import query from '@/queries/preferences';
import * as themes from '@/themes';
import apollo from '@/apollo'
import Page from './Page';

class App extends Component {
  render() {
    const queryProps = { query }
    return (
      <ApolloProvider client={apollo}>
        <Query {...queryProps}>
          {({ data }) => (
            <ThemeProvider theme={themes[data.preferences.theme]}>
              <Page {...data.preferences} />
            </ThemeProvider>
          )}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;

