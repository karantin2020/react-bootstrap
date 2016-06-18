import React from 'react';

import styles from './App.css';
import batteryImg from './images/battery.svg';

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
        <p>Yeppeee me!!!</p>
        <p><img src={batteryImg} alt="empty" width="64" /></p>
        <p><input onChange={this.updateName} placeholder="Place text here" /></p>
      </div>
    );
  }
}
