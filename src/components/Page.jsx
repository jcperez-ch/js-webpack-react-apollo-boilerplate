import React, { Component } from 'react';
import Btn from './styled/Button';

class Page extends Component {
  render() {
    const { locale, theme } = this.props;
    return (
      <div>
        <h1>Title 🚀</h1>
        <Btn>Locale {locale}</Btn>
        <Btn>Theme {theme}</Btn>
        
      </div>
    );
  }
}

export default Page;