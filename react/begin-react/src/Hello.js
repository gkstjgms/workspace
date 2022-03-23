import React, { Component } from 'react';

class Hello extends Component {
    static defaultProps = {
        name: "noname"
    };

    render() {
        const { color, name, isSpecial } = this.props;
        return (
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                Hello, {name}!
            </div>
        )
    }
}

export default Hello;