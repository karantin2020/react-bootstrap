import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './App.css';
import batteryImg from './images/battery.svg';

import { store } from '../../Stores';
import generateActions from '../../Actions/immutableActions';
const name = generateActions(["name"], store.dispatch);

class App extends Component {

  constructor(props) {
    super(props);
    this.def_name = props.name;
  };

  checkConnection() {
    var request = new window.XMLHttpRequest({mozSystem: true});
    request.open('HEAD', 'http://localhost:3000', true);
    request.timeout = 5750;

    request.addEventListener('load', function(event) {
       console.log('We seem to be online!');
    });

    var offlineAlert = function(event) {
       console.log('We are likely offline');
    };

    request.addEventListener('error', offlineAlert);
    request.addEventListener('timeout', offlineAlert);

    request.send(null);
  };

  componentWillMount() {
    // this.interval = setInterval(this.checkConnection, 30000);
  };

  componentWillUnmount() {
      // clearInterval(this.interval);  
  };

  updateName = (e) => {
    var new_name = e.target.value || this.def_name;
    name.setIn(
      new Promise(function(resolve, reject) {
        resolve(new_name);
      })
    );
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <p>Hi, {this.props.name}!</p>
        <p>Yeppeee me!!!</p>
        <p><img src={batteryImg} alt="empty" width="64" /></p>
        <p><input onChange={this.updateName} placeholder="Place text here" autoFocus/></p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    name: state.getIn(['name'])
  };
}

module.exports = connect(
  mapStateToProps/*,
//   mapDispatchToProps*/
)(App);