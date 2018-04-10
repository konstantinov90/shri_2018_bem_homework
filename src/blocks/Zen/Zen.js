import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Card from 'b:Card';
import 'e:Logo';

export default decl({
    block: 'Zen',
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
                <Bem elem="Logo"></Bem>
                { this.state.data.length && this.state.data.map((card) => {
                    return <Card { ...card }/>
                }) }
            </Fragment>
        );
    }
});
