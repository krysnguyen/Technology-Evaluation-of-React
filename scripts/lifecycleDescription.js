'use strict';
const { Component } = React;
const { Button } = MaterialUI;

function Mounting() {
    return (
        <div>
            <h2>Mounting</h2>
            <p>The following are executed in order when a component is created.</p>
            <ul>
                <li>constructor()</li>
                <li>static getDerivedStateFromProps()</li>
                <li>render()</li>
                <li>componentDidMount()</li>
            </ul>
        </div>
    )
}

function Updating() {
    return (
        <div>
            <h2>Updating</h2>
            <p>
                An update is triggered by prop or state changes.<br></br>
                The following are executed in order during update of a component.
            </p>
            <ul>
                <li>static getDerivedStateFromProps()</li>
                <li>shouldComponentUpdate()</li>
                <li>render()</li>
                <li>getSnapshotBeforeUpdate()</li>
                <li>componentDidUpdate()</li>
            </ul>
        </div>
    )
}

function Unmounting() {
    return (
        <div>
            <h1>Unmounting</h1>
        </div>
    )
}

class Description extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.selection == 0) {
            return <Mounting />;
        } else if (this.props.selection == 1) {
            return <Updating />;
        } else {
            return <Unmounting />
        }
    }

}



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: 0,
            first: 'primary',
            second: 'secondary',
            third: 'secondary'
        }
    }
    render() {
        return (
            <div>
                <Button onClick={()=> this.setState({selection: 0, first: 'primary', second: 'secondary', third: 'secondary'})} 
                color={this.state.first}
                variant="contained"
                style={{padding: 10, margin: 5}}>
                    Mounting
                </Button>
                <Button onClick={() => this.setState({selection: 1, first: 'secondary', second: 'primary', third: 'secondary'})} 
                color={this.state.second}
                variant="contained"
                style={{padding: 10, margin: 5}}>
                    Updating
                </Button>
                <Button onClick={() => this.setState({selection: 2, first: 'secondary', second: 'secondary', third: 'primary'})} 
                color={this.state.third}
                variant="contained"
                style={{padding: 10, margin: 5}}>
                    Unmounting
                </Button>
                <Description selection={this.state.selection} />
            </div>
        )
    }
}

const domContainer = document.querySelector('#lifecyle_description');
ReactDOM.render(<Main />, domContainer);