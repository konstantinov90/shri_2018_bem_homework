import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'm:clip'

export default decl({
    block: 'Card',
    elem: 'Picture',
    mods() {
        return {
            clip: this.props.clip,
        };
    },
    content() {
        const [ img_name, ext ] = this.props.image.split('.');
        return (
            <picture>
                <source srcSet={ `${img_name}@3x.${ext}` } media="(min-width: 820px)"/>
                <source srcSet={ `${img_name}@2x.${ext}` } media="(min-width: 620px)"/>
                <source srcSet={ `${this.props.image} ${img_name}@2x.${ext} 2x` }/>
                <img src={ `${img_name}@2x.${ext}` } alt=""/>
            </picture>
        )
    }
})