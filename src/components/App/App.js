import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './App.css';
import batteryImg from './images/battery.svg';

import { store } from '../../Stores';
import generateActions from '../../Actions/immutableActions';
const name = generateActions(["name"], store.dispatch);

class App extends Component {
  updateName = (e) => {
    name.setIn(
      new Promise(function(resolve, reject) {
        resolve(e.target.value || "Huray");
      })
    );
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <p>Hi, {this.props.name}!</p>
        <p>Yeppeee me!!!</p>
        <p><img src={batteryImg} alt="empty" width="64" /></p>
        <p><input onChange={this.updateName} placeholder="Place text here" /></p>
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