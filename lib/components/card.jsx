import React from 'react';

class Card extends React.Component {
  constructor (props) {
    super(props);

  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const card = this.props.card;
    if (this.props.freeze) {
      return;
    }
    else if (!card.revealed && !card.matched) {
      this.props.checkCard(card.pos);
    }
  }

  render() {
    const card = this.props.card;
    const suit = `assets/${card.suit}.png`;
    const color = card.suit === "spades" || card.suit === "clubs" ? "black" : "red";
    const klass = () => {
      if (card.revealed && !card.matched) {
        return "card revealed";
      } else if (card.matched) {
        return "card matched";
      }
    }

    if (!card.revealed && !card.matched) {
      return (
        <li className="card hidden" onClick={this.handleClick}>
          <img src="assets/card_back.jpg"></img>
        </li>
      );
    } else {
        return (
          <li className={klass()}>
            <img src={suit} className="suit-image"></img>
            <br />
            <p className={color}>{card.value}</p>
          </li>
        );
    }
  }
}

export default Card;
