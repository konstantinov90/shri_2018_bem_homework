import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Header from 'e:Header';
import Card from 'b:Card';

export default decl({
  block: 'App',
  willInit() {
    this.state = {
      data: [],
    };
    fetch('data.json')
      .then(resp => resp.json())
      .then(data => this.setState({ data }));
  },
  content() {
    return (
      <Fragment>
        <Header/>
        <Bem elem="Intro">
          { this.state.data.length ? this.state.data.map((card) => {
            // return <Bem elem="description">{card.description}</Bem>
            return <Card { ...card }></Card>
          }) : '' }
        </Bem>
      </Fragment>
    );
  }
});
