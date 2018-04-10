import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import IconHeart from 'b:IconHeart';
import IconNavMore from 'b:IconNavMore';
import Picture from 'e:Picture';

export default decl({
    block: 'Card',
    content() {
        return (
            <div>
                <Bem elem="Header" tag="div">
                    <h3 style={{ color: this.props.titleColor }}>{ this.props.title }</h3>
                </Bem>
                <IconHeart/>
                <IconNavMore/>
                <p>{ this.props.description }</p>
                { this.props.image &&
                    <Picture image={ this.props.image }></Picture>
                }
                <h4>{ this.props.channelName }</h4>
            </div>
        )
    }
});
