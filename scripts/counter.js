const { Component } = React;
const { Button } = MaterialUI;
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0 
        }
        this.increment = () => this.setState({counter: this.state.counter + 1});
        this.decrement = () => this.setState({counter: this.state.counter - 1});
    }
  
    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.increment} style={{padding: 10, margin: 5}}>Increment</Button>
                <Button variant="outlined" color="secondary" onClick={this.decrement} style={{padding: 10, margin: 5}}>Decrement</Button>
                <div className="counter" style={{margin: 5}}>
                  <br></br>
                    Counter: {this.state.counter}
                </div>
            </div>
        )
    }
  }
  
  const domContainer = document.querySelector('#state_demo');
  ReactDOM.render(<Counter />, domContainer);
