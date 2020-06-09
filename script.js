"use strict";




//
// MICHAEL'S CODE:
//

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

var concertDate = new Date(2021, 11, 27);
function getCountdown(today) {
    var diff = Math.abs(concertDate - new Date(today));
    var countdownDate = new Date(diff);
    return dhm(countdownDate);
}

// adapted from: https://stackoverflow.com/questions/8528382/javascript-show-milliseconds-as-dayshoursmins-without-seconds
function dhm(t){
    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        cm = 60 * 1000,
        d = Math.floor(t / cd),
        h = Math.floor( (t - d * cd) / ch),
        m = Math.floor( (t - d * cd - h * ch) / cm),
        s = Math.round( (t - d * cd - h * ch - m * cm) / 1000),
        pad = function(n){ return n < 10 ? '0' + n : n; };
  if (s === 60) {
      m++;
      s = 0;
  }
  if( m === 60 ){
    h++;
    m = 0;
  }
  if( h === 24 ){
    d++;
    h = 0;
  }
  return (d + " days, " + h + " hour(s), " + m + " minute(s), " + s + " seconds.");
  return [d, pad(h), pad(m), pad(s)].join(':');
}


/*
NOTE: to change HTML to JSX:
    change 'class' to 'className'
    for onclick functions refer to: https://stackoverflow.com/questions/35870976/reactjs-expected-onclick-listener-to-be-a-function-instead-got-type-string
    also, note that the div below has no siblings, because all HTML in a JSX variable must be wrapped in one tag
*/
class NewYorkConcert extends React.Component {
    render() {
        return (
            <div>
                <p><b>New York</b></p>
                <p id="countdownTitle">Countdown to our next show:</p>
                <p id="countdown">{getCountdown(this.props.date)}</p>
                <p className="w3-opacity">Fri 27 Nov 2021</p>
                <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button className="w3-button w3-black w3-margin-bottom" onClick={() => document.getElementById('ticketModal').style.display='block'}>Buy Tickets</button>
            </div>
        );
    }
}
    

const newYorkContainer = document.querySelector("#insertFromReact");
ReactDOM.render(<NewYorkConcert date={new Date()}/>, newYorkContainer);
setInterval(
    function() {
        ReactDOM.render(<NewYorkConcert date={new Date()}/>, newYorkContainer);
    },
    1000
);


