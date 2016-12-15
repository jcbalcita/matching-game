import React from 'react';

class Card extends React.Component {
  constructor (props) {
    super(props);

  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    
    if (!this.props.card.revealed && !this.props.card.matched) {
      this.props.checkCard(this.props.card.pos);
    }
  }

  render() {
    const card = this.props.card
    const suit = `assets/${card.suit}.png`
    const colors = { "hearts": "red",
                     "spades": "black",
                     "clubs": "black",
                     "diamonds": "red"
    }
    const color = colors[card.suit];

    if (!card.revealed && !card.matched) {
      return (
        <li className="card hidden" onClick={this.handleClick}>
          <img src="assets/card_back.jpg"></img>
        </li>
      );
    } else if (card.revealed && !card.matched) {
        return (
          <li className="card revealed">
            <img src={suit} className="suit-image"></img>
            <br />
            <p className={color}>{card.value}</p>
          </li>
        );
    } else if (card.matched) {
       return (
         <li className="card matched">
           <img src={suit} className="suit-image"></img>
           <br />
           <p className={color}>{card.value}</p>
         </li>
       );
    }
  }
}

export default Card;
