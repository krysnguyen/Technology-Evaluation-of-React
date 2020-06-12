'use strict';

const { Component } = React;

export default class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <pre>
                    <code>
                        {this.props.code}
                    </code>
                </pre>
            </div>
        )
    }
}