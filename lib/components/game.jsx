import React from 'react';
import Card from './card';
import * as MatchingGame from '../matching_game';

class Game extends React.Component {
  constructor(props) {
    super(props);

    const board = new MatchingGame.Board();
    const ai = new MatchingGame.ComputerPlayer();
    this.state = {
      board: board,
      shownCard: null,
      score: 0,
      turn: 0,
      freeze: false,
      ai: ai
    }

    this.checkCard = this.checkCard.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  checkCard(pos) {
    const board = this.state.board;
    const card = board.cards[pos];
    card.revealed = true;

    this.setState({ board }, () => {
      if (this.state.turn === 0) {
        this.setState({
          board,
          turn: 1,
          shownCard: card
        });
      } else if (this.state.turn === 1) {
        this.checkIfMatch(pos);
      }
    });
  }

  checkIfMatch(pos) {
    const currentCard = this.state.board.cards[pos];
    const prevCard = this.state.shownCard;
    const board = this.state.board;

    if (currentCard.value === prevCard.value) {
      const score = this.state.score + 1
      prevCard.revealed = false;
      prevCard.matched = true;
      currentCard.revealed = false;
      currentCard.matched = true;
      this.setState({
        board,
        score,
        turn: 0,
        shownCard: null
      });
    } else {
      currentCard.revealed = true;
      this.setState({ freeze: true });

      window.setTimeout(() => {
        prevCard.revealed = false;
        currentCard.revealed = false;
        this.setState({
          turn: 0,
          shownCard: null,
          freeze: false
      })}, 1300);
    }
  }

  resetGame() {
    this.setState({
      board: new MatchingGame.Board(),
      shownCard: null,
      score: 0,
      turn: 0,
      freeze: false
    })
  }

  computerTurn() {
    // ...
  }

  render() {
    const cards = this.state.board.cards.map((card, idx) => (
      <Card card={card} key={idx} freeze={this.state.freeze} checkCard={this.checkCard}/>
    ));

    if (this.state.score === 26) {
      return (
        <div>
          <p id="winning-message">Yay! You won!</p>
          <br />
          <button onClick={this.resetGame}>
            Reset Game
          </button>
        </div>
      )
    }

    return (
      <div>
        <button onClick={this.resetGame}>
          Reset Game
        </button>
        &nbsp;&nbsp;
        <button onClick={() => this.setState({ score: 26 })}>
          Skip to end
        </button>
        <p> Pairs found: {this.state.score}</p>
        <ul id="board">{cards}</ul>
      </div>
    )
  }
}

export default Game;
