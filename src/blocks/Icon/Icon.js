import React from 'react';
import { decl } from 'bem-react-core';

export default decl({
    block: 'Icon',
    content() {
        return (
            <svg { ...this.props }>
                { this.props.children }
            </svg>
        );
    }
});
