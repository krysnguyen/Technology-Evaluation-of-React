'use strict';

const { Component } = React;
const { Button } = MaterialUI;

const codeBlock = `
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0 
        }
        this.increment = () => this.setState({counter: this.state.counter + 1});
        this.decrement = () => this.setState({counter: this.state.counter - 1});
    }

    render() {
        console.log('Render');
        return (
            &lt;div&gt;
                &lt;button onClick={this.increment}>Increment&lt;/button&gt;
                &lt;button onClick={this.decrement}>Decrement&lt;/button&gt;
                &lt;div className="counter"&gt;
                    Counter: {this.state.counter}
                &lt;/div&gt;
            &lt;/div&gt;
        )
    }
  }`;

const codeBlock2 = 'test';
class Snippet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codeBlock
        }
    }
    render() {
        return (
            <div>
                <Button onClick={()=> this.setState({codeBlock: codeBlock2})}>Text</Button>
                <pre>
                    <code>
                        {this.state.codeBlock}
                    </code>
                </pre>
            </div>
            
        )
    }

}

const domContainer = document.querySelector('#code_1');
ReactDOM.render(<Snippet />, domContainer);