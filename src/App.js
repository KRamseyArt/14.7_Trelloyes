import React from 'react';
import List from './components/List';
import './App.css';
import STORE from './store';


export default class App extends React.Component {
  state = {
    store: STORE
  };

  handleDeleteCard = (cardId) =>{
    // console.log('handleDeleteCard called')
    const lists = this.state.store.lists.map(list => {
      list.cardIds = list.cardIds.filter(id => id !== cardId)
      return list
    })
    this.setState({
      store: {...this.state.store, lists}
    })
  }
  handleAddRandomCard = (listId) =>{
    console.log('handleAddRandomCard called')
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }

    const card = newRandomCard();
    this.state.store.allCards[card.id] = card
    
    const list = this.state.store.lists.find(list => list.id == listId)
    list.cardIds.push(card.id)
    this.setState({
      store: {...this.state.store}
    })
  }
  
  render(){
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.store.lists.map(list => {
            return (
              <List
                key={list.id}
                id={list.id}
                handleDeleteCard={this.handleDeleteCard}
                handleAddRandomCard={this.handleAddRandomCard}
                header={list.header}
                cards={list.cardIds.map(id => this.state.store.allCards[id])}
              />
            )
          })}
        </div>
      </main>
    );
  }
}