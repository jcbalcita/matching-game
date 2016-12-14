import React from 'react';

class Card extends React.Component {
  constructor (props) {
    super(props);
    this.revealed = false;
    this.matched = false;
    this.value = props.value;
    this.suit = props.suit;

    this.handleClick = this.handleClick.bind(this);
  }

  

}
