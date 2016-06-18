import React from 'react';

import styles from './App.css';
import batteryImg from './images/battery.svg';
import killme from './app.json';

export default class App extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    killme: React.PropTypes.any,
  };

  state = {
    name: this.props.name || 'Dude',
  };

  updateName = (e) => {
    this.setState({
      name: (e.target.value) ? e.target.value : 'Dude',
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <p>Hi, {this.state.name}!</p>
        <p>__NODE_ENV__: {__NODE_ENV__} {killme.killme}</p>
        <p><img src={batteryImg} alt="empty" width="64" /></p>
        <p><input onChange={this.updateName} placeholder="Enter your name" /></p>
      </div>
    );
  }
}
