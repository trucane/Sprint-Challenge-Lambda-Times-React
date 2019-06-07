import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      

      {props.cards.map((card, index) =>(
        <Card  key={index} card={card} />
      ))
        /* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  card:PropTypes.arrayOf(propTypes.object)
}

export default Cards;