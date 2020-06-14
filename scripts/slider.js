const { Component } = React;
const { Box, Slider } = MaterialUI;

const colors = ['#0048BA', '#9F2B68', '#A4C639', '#E9D66B', '#89CFF0', '#DA1884']
class ColorSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0 
        }
        this.handleChange = (event, value) => this.setState({value});
    }
  
    render() {
        return (
            <div>
                <div style={{backgroundColor: colors[this.state.value%5],  padding: 30, border: 1}}>
                    Watch this color change to {colors[this.state.value%5]}
                </div>
                
                <Box component="span" m={1}>
                        <Slider value={this.state.value} onChange={this.handleChange} aria-labelledby="continuous-slider" />
                </Box>

            </div>
        )
    }
  }
  
  const domContainer = document.querySelector('#slider');
  ReactDOM.render(<ColorSlider />, domContainer);