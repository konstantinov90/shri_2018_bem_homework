import { decl } from 'bem-react-core';

import 'm:clip'

export default decl({
    block: 'Card',
    elem: 'Picture',
    mods() {
        return {
            clip: this.props.cardSize !== 'l',
        };
    },
    content() {
        return this.__base(...arguments)
    }
})