import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Card from 'b:Card';
// import 'b:Card m:size=small'
import 'e:Logo';
import 'e:Wrapper';

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
                <Bem elem="Wrapper">
                    { this.state.data.map((card, idx) => {
                        return <Card key={ idx } { ...card }/>
                    }) }
                </Bem>
            </Fragment>
        );
    }
});
