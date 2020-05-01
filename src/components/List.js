import React from 'react';
import Card from './Card';
import './List.css';

export default function List(props) {
  return (
    <section className="List">
      <header>
        {props.header}
      </header>
      <div className="List-cards">
        {props.cards.length === 0 ? "empty" : props.cards.map((card, i) => {
          return (
            <Card
              key={i}
              id={card.id}
              handleDeleteCard={props.handleDeleteCard}
              title={card.title}
              content={card.content}
            />
          )
        })}
        <button
          type="button"
          onClick={
            () => props.handleAddRandomCard(props.id)}
          className="List-add-button"
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}

List.defaultProps = {
  cards:[]
}