import React, { Component } from 'react';
import './App.css';
import Stage from './Stage';
import Chatbox from './Chatbox';

class App extends Component {
  
  render() {
    const { participants, chatEvents } = this.props;
    return (
    <main>
      <div className="chatroom">
        {chatEvents.map(person => (
          <Chatbox 
          key = {person.key}
          type={person.type} 
          message={person.message} 
          timestamp={person.timestamp} 
          messagetype ={person.messagetype}
          />
        ))} 
      </div>
      <div className="stage">
         {participants.map(person => (
           <Stage 
           name = {person.id}
           avatar = {person.avatar}
           onStage ={person.onStage}
           />))}
      </div>
    </main>
    );
  }
}

export default App;
