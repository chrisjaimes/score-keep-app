import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;

    e.preventDefault();

    if(playerName) {
      e.target.playerName.value = '';

      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }

  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}> {/*bind(this) preserves the 'this' binding, so we can use 'this' in  handleSubmit if we need to.*/}
          <input className="form__input" type="text" name="playerName" placeholder="Player name" />
          <button className="button">Add player</button>
        </form>
      </div>
    );
  }
}
