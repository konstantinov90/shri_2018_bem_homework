import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import IconHeart from 'b:IconHeart';
import IconNavMore from 'b:IconNavMore';
import Picture from 'e:Picture';

import 'e:Header';
import 'e:Description';
import 'e:ChannelName';
import 'e:ChannelName m:black';
import 'm:size=s';
import 'm:size=m';
import 'm:size=l';


export default decl({
    block: 'Card',
    mods() {
        return {
            size: this.props.size,
        };
    },
    content() {
        return (
            <Fragment>
                <Bem elem="Header" tag="div">
                    <h3 style={{ color: this.props.titleColor }}>{ this.props.title }</h3>
                </Bem>
                { this.props.image &&
                    <Picture image={ this.props.image } clip={ this.props.size !== 'l' }></Picture>
                }
                { this.props.description &&
                    <Bem elem="Description">
                        <p>{ this.props.description }</p>
                    </Bem>
                }
                <Bem elem="ChannelName" tag="h4"
                    mods={{ black: this.props.size === 's' && !this.props.image }}>
                    { this.props.channelName }
                </Bem>
                <IconHeart/>
                <IconNavMore/>
            </Fragment>
        );
    },
});
