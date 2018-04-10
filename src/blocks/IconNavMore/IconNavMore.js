import React from 'react';
import { decl } from 'bem-react-core';

import Icon from 'b:Icon';

export default decl({
    block: 'IconNavMore',
    content() {
        return (
            <Icon viewBox="0 0 20 20">
                <path d="M4 12c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM10 12c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM16 12c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z"></path>
            </Icon>
        );
    }
});
