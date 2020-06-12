"use strict";






//
// MICHAEL'S CODE:
//


/*
NOTE: to change HTML to JSX:
    - change 'class' to 'className'
    - for onclick functions refer to: https://stackoverflow.com/questions/35870976/reactjs-expected-onclick-listener-to-be-a-function-instead-got-type-string
    - also, note that the div below has no siblings, because all HTML in a JSX variable must be wrapped in one tag
*/
class NewYorkConcert extends React.Component {
    render() {
        return (
            <div>
                <p><b>New York</b></p>
                <p className="countdownTitle">Countdown to this show:</p>
                <p className="countdown">{getCountdown(new Date(2020, 11, 27), this.props.date)}</p>
                <p className="w3-opacity">Fri 27 Nov 2020</p>
                <input type="number" className="ticket-form"></input>
                <p className="ticket-form-title">Number of tickets:</p>
                <button className="w3-button w3-black w3-margin-bottom" onClick={() => document.getElementById('ticketModal').style.display='block'}>Buy Tickets</button>
            </div>
        );
    }
}

function reactJSX(currentDate) {
    return (
        <div>
            <p><b>New York</b></p>
            <p className="countdownTitle">Countdown to this show:</p>
            <p className="countdown">{getCountdown(new Date(2020, 11, 27), currentDate)}</p>
            <p className="w3-opacity">Fri 27 Nov 2020</p>
            <input type="number" className="ticket-form"></input>
            <p className="ticket-form-title">Number of tickets:</p>
            <button className="w3-button w3-black w3-margin-bottom" onClick={() => document.getElementById('ticketModal').style.display='block'}>Buy Tickets</button>
        </div>
    )
}

function regularHTML(currentDate) {
    return (
        `<p><b>Paris</b></p>
        <p class="countdownTitle">Countdown to this show:</p>
        <p id="reg-countdown" class="countdown">${getCountdown(new Date(2020, 11, 28), currentDate)}</p>
        <p class="w3-opacity">Sat 28 Nov 2020</p>
        <input type="number" class="ticket-form"></input>
        <p class="ticket-form-title">Number of tickets:</p>
        <button class="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>`
    );
}
    
const newYorkContainer = document.querySelector("#insertFromReact");
const parisContainer = document.querySelector("#insertRegHTML");
ReactDOM.render(<NewYorkConcert date={new Date()}/>, newYorkContainer);
parisContainer.innerHTML = regularHTML(new Date());

setInterval(
    function() {
        ReactDOM.render(reactJSX(new Date()), newYorkContainer);
        parisContainer.innerHTML = regularHTML(new Date());
    },
    1000
);


//
// helper functions:
//

function getCountdown(concertDate, today) {
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
