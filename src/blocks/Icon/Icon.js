import React from 'react';
import { decl } from 'bem-react-core';

export default decl({
    block: 'Icon',
    content() {
        return (
            <svg viewBox={ this.props.viewBox }>
                { this.props.children }
            </svg>
        );
    }
});
