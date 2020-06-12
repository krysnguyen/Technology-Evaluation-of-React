
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
          <div>
              <button onClick={this.increment}>Increment</button>
              <button onClick={this.decrement}>Decrement</button>
              <div className="counter">
                  Counter: {this.state.counter}
              </div>
          </div>
      )
  }
}

const domContainer = document.querySelector('#state_demo');
ReactDOM.render(<Counter />, domContainer);