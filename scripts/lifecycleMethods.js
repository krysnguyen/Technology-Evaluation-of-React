'use strict';
const { Component } = React;
const { Button, LinearProgress } = MaterialUI;

function ComponentDidMount() {
    return (
        <div>
            <h3>componentDidMount()</h3>
            <p>
                This method is called as soon as the component is mounted.<br></br>
                Here is a good place for any API calls or fetching data. <br></br>
                You are allowed to use <code>setState</code> here which causes<br></br>
                another rendering before the browser updates the UI. <br></br>
                This way the user won't see that flickering effect when you see the screen refresh.
            </p>
        </div>
    )
}

function ComponentDidUpdate() {
    return (
        <div>
            <h3>componentDidUpdate()</h3>
            <p>
                Use this to conditionally to update the state. Notice <i>conditionally</i>,<br></br>
                otherwise you risk an infinite loop. 
            </p>
        </div>
    )
}

function ComponentWillUnmount() {
    return (
        <div>
            <h3>componentWillUnmount()</h3>
            <p>
                This is where you want to have some clean up code before the component is unmounted and destoryed.
            </p>
        </div>
    )
}

class Description extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.selection == 0) {
            return <ComponentDidMount />;
        } else if (this.props.selection == 1) {
            return <ComponentDidUpdate />;
        } else {
            return <ComponentWillUnmount />
        }
    }

}

class Child extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        alert('Description component did mount');
    }

    componentWillUnmount() {
        alert('Description component will unmount');
    }

    render() {
        return <h1>Test</h1>;
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: 0,
            first: 'primary',
            second: 'secondary',
            third: 'secondary',
            loading: true
        }
        this.doUpdate = () => this.setState({selection: 2 - this.state.selection})
    }

    componentDidMount() {
        demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    componentDidUpdate(prevProps, prevState) {
        // Typical usage (don't forget to compare props):
        if (this.state.selection !== prevState.selection) {
          alert('Main component did update');
        }
    }

    render() {
        if (this.state.loading) return <LinearProgress />
        return (
            <div>
                <Button onClick={()=> this.setState({selection: 0, first: 'primary', second: 'secondary', third: 'secondary'})} 
                color={this.state.first}
                variant="contained"
                style={{padding: 10, margin: 5}}>
                    Component Did Mount
                </Button>
                <Button onClick={() => this.setState({selection: 1, first: 'secondary', second: 'primary', third: 'secondary'})} 
                color={this.state.second}
                variant="contained"
                style={{padding: 10, margin: 5}}>
                    Component Did Update
                </Button>
                <Button onClick={() => this.setState({selection: 2, first: 'secondary', second: 'secondary', third: 'primary'})} 
                color={this.state.third}
                variant="contained"
                style={{padding: 10, margin: 5}}>
                    Component Will Unmount
                </Button>
                <Description selection={this.state.selection} />
                <Button onClick={() => this.doUpdate()}>Force Update</Button>
                <Child />
            </div>
        )
    }
}

function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

const domContainer = document.querySelector('#lifecycle_methods');
ReactDOM.render(<Main />, domContainer);